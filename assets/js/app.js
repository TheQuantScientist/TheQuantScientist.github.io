const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-site-nav]");
const progress = document.querySelector("[data-progress]");

document.querySelector("[data-year]").textContent = new Date().getFullYear();

navToggle?.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
    document.body.classList.toggle("nav-open", !open);
});

document.querySelectorAll(".site-nav a").forEach((link) => link.addEventListener("click", () => {
    navToggle?.setAttribute("aria-expanded", "false");
    nav?.classList.remove("open");
    document.body.classList.remove("nav-open");
}));

document.querySelectorAll(".detail-toggle").forEach((button) => button.addEventListener("click", () => {
    const item = button.closest(".experience-item");
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    button.firstChild.textContent = expanded ? "View scope " : "Close scope ";
    item.classList.toggle("expanded", !expanded);
}));

const filters = document.querySelectorAll(".filter-button");
const publications = document.querySelectorAll(".publication-card");
filters.forEach((button) => button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle("active", item === button));
    publications.forEach((publication) => {
        publication.hidden = filter !== "all" && publication.dataset.type !== filter;
    });
}));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
    }
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelector("[data-back-to-top]")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

window.addEventListener("scroll", () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 20);
    const height = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`;
}, { passive: true });

const field = document.querySelector("[data-signal-field]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (field && !prefersReducedMotion && window.innerWidth > 520) {
    const context = field.getContext("2d");
    const hero = field.closest(".hero");
    let particles = [];
    let pointer = { x: -1000, y: -1000 };

    const setFieldSize = () => {
        const rect = hero.getBoundingClientRect();
        const scale = Math.min(window.devicePixelRatio || 1, 2);
        field.width = rect.width * scale;
        field.height = rect.height * scale;
        context.setTransform(scale, 0, 0, scale, 0, 0);
        const quantity = Math.max(22, Math.min(46, Math.floor(rect.width / 24)));
        particles = Array.from({ length: quantity }, () => ({
            x: Math.random() * rect.width,
            y: Math.random() * rect.height,
            dx: (Math.random() - 0.5) * 0.2,
            dy: (Math.random() - 0.5) * 0.2,
            size: Math.random() * 1.45 + 0.45,
        }));
    };

    const draw = () => {
        const rect = hero.getBoundingClientRect();
        context.clearRect(0, 0, rect.width, rect.height);
        particles.forEach((particle, index) => {
            particle.x += particle.dx;
            particle.y += particle.dy;
            if (particle.x < 0 || particle.x > rect.width) particle.dx *= -1;
            if (particle.y < 0 || particle.y > rect.height) particle.dy *= -1;
            const pointerDistance = Math.hypot(particle.x - pointer.x, particle.y - pointer.y);
            if (pointerDistance < 150) {
                particle.x += (particle.x - pointer.x) * 0.008;
                particle.y += (particle.y - pointer.y) * 0.008;
            }
            context.fillStyle = index % 5 === 0 ? "rgba(184,255,109,.8)" : "rgba(112,231,255,.55)";
            context.beginPath();
            context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            context.fill();
            for (let next = index + 1; next < particles.length; next += 1) {
                const other = particles[next];
                const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
                if (distance < 105) {
                    context.strokeStyle = `rgba(112,231,255,${(1 - distance / 105) * 0.16})`;
                    context.lineWidth = 0.55;
                    context.beginPath();
                    context.moveTo(particle.x, particle.y);
                    context.lineTo(other.x, other.y);
                    context.stroke();
                }
            }
        });
        window.requestAnimationFrame(draw);
    };

    hero.addEventListener("pointermove", (event) => {
        const rect = hero.getBoundingClientRect();
        pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    });
    hero.addEventListener("pointerleave", () => { pointer = { x: -1000, y: -1000 }; });
    window.addEventListener("resize", setFieldSize, { passive: true });
    setFieldSize();
    draw();
}

const chatToggle = document.querySelector("[data-chat-toggle]");
const chatPanel = document.querySelector("[data-chat-panel]");
const chatClose = document.querySelector("[data-chat-close]");
const chatForm = document.querySelector("[data-chat-form]");
const chatInput = document.querySelector("#chat-input");
const chatMessages = document.querySelector("[data-chat-messages]");
const chatEndpoint = document.body.dataset.chatEndpoint;
const conversation = [];

const localReply = (question) => {
    const query = question.toLowerCase();
    if (/(contact|email|phone|reach|linkedin)/.test(query)) return "You can reach Anh at anhnguyen.aiml@gmail.com, by phone at +84 399 985 047, or via LinkedIn, Google Scholar, and ORCID from the contact icons.";
    if (/(hitachi|current|job|work|experience)/.test(query)) return "Anh is an AI/ML Engineer II at Hitachi Digital Services. His current work spans agentic AI platforms, document intelligence, RAG workflows, and on-premise automation.";
    if (/(publication|research|paper|study|scholar|omniformer|transformer)/.test(query)) return "Anh’s research focuses on financial time-series forecasting, Transformers, neural ODEs, cryptocurrency forecasting, and AI security. The portfolio lists LiteFormer, ChanFormer, IntraFormer, OmniFormer, CLAM, PSR-NODE, HIEU, and more in the research section.";
    if (/(project|system|build|vision|hololens|rag)/.test(query)) return "Selected work includes rail-planning agents, factory document-standardisation workflows, RAG systems, and HoloLens computer-vision guidance, alongside quantitative forecasting models.";
    return "I can help with Anh’s AI engineering experience, research and publications, selected systems, achievements, or contact details. What would you like to know?";
};

const addChatMessage = (role, text) => {
    const message = document.createElement("div");
    message.className = `chat-message ${role}`;
    message.textContent = text;
    chatMessages?.append(message);
    chatMessages?.scrollTo({ top: chatMessages.scrollHeight, behavior: "smooth" });
};

const setChatOpen = (open) => {
    if (!chatPanel) return;
    chatPanel.hidden = !open;
    chatToggle?.setAttribute("aria-expanded", String(open));
    if (open) window.setTimeout(() => chatInput?.focus(), 120);
};

chatToggle?.addEventListener("click", () => setChatOpen(chatPanel?.hidden));
chatClose?.addEventListener("click", () => setChatOpen(false));
document.querySelectorAll("[data-chat-prompt]").forEach((button) => button.addEventListener("click", () => {
    chatInput.value = button.dataset.chatPrompt || "";
    chatForm?.requestSubmit();
}));

chatForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const text = chatInput?.value.trim();
    if (!text) return;
    addChatMessage("user", text);
    conversation.push({ role: "user", content: text });
    chatInput.value = "";

    if (!chatEndpoint) {
        const reply = localReply(text);
        conversation.push({ role: "assistant", content: reply });
        window.setTimeout(() => addChatMessage("assistant", reply), 220);
        return;
    }

    addChatMessage("assistant is-loading", "Thinking…");
    const loadingMessage = chatMessages?.lastElementChild;
    try {
        const response = await fetch(chatEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: conversation }) });
        const data = await response.json();
        if (!response.ok || !data.reply) throw new Error("Assistant unavailable");
        loadingMessage?.remove();
        conversation.push({ role: "assistant", content: data.reply });
        addChatMessage("assistant", data.reply);
    } catch {
        loadingMessage?.remove();
        addChatMessage("assistant", "The live assistant is unavailable, but I can still answer questions from Anh’s public portfolio.");
        addChatMessage("assistant", localReply(text));
    }
});
