# 🚧 Site Under Maintenance 🚧

While our site is down, you can play a fun interactive game to pass the time! 🎮

## Game: Escape the Maintenance Zone

You're stuck in a mysterious maintenance zone, and you need to make decisions to escape!

### How to play:
1. **Make a choice** by typing the letter corresponding to your choice (e.g., **A**, **B**).
2. Click the "Next" button after each choice to continue your adventure.

---

### Round 1: Choose Your Path

You find yourself standing at a fork in the road. One path leads into a spooky forest, while the other seems brighter and more welcoming.

- **A**: Take the spooky path.
- **B**: Take the well-lit path.

> **Make your choice (A or B)**

<button id="choice1" onclick="nextStep(1)">Make a choice</button>

---

<script>
  let currentStep = 1;
  
  function nextStep(step) {
    if (step === 1) {
      document.getElementById('choice1').innerText = "You chose the spooky path...";
      // More steps logic can go here
    }
  }
</script>

