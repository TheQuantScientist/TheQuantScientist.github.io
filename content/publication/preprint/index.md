---
title: "CLAM: A Synergistic Deep Learning Model for Multi-Step Stock Trend Forecasting"
authors:
- admin
- Truong Gia Hy
- Phan Thi Quynh Nhu
date: "2025-01-27T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: >
  <div style="text-align: justify;">
  This paper introduces CLAM, a hybrid deep learning framework that integrates CNNs, LSTMs, and Attention Mechanism (AM) for straightforward multi-step stock trend forecasting. By leveraging CNNs for spatial feature extraction, LSTMs for capturing temporal dependencies, and AM for dynamically focusing on relevant data, CLAM significantly outperforms traditional models in predictive accuracy. Evaluated on diverse stock datasets from different industries, CLAM demonstrates an average reduction of over 80% in MAE and RMSE compared to standalone CNN, LSTM, and fused CNN-LSTM. The model’s ability to capture both short-term and long-term trends is particularly advantageous for real-time financial trading, resulting in 75% trend prediction accuracy, with most cases witnessing consecutive accurate forecasts of flash crashes or uptrends, which aids in strategic investment decisions and risk management.
    </div>


# Summary. An optional shortened abstract.
summary: An applied CLAM model, stacked with triple layers of CNN, LSTM, and AM, to improve S&P500 stock trend forecasting across different industries. CLAM accurately predicts 70% of the one-week ahead financial trend.


tags:
- Algorithms

featured: true

links:
url_pdf: https://dx.doi.org/10.2139/ssrn.4940154
url_code: 'https://github.com/TheQuantScientist/CNN-LSTM-AM'
url_video: 'https://www.canva.com/design/DAGXW78yckM/nTaLTG7yslOL1vuEuqwXhA/edit?utm_content=DAGXW78yckM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

This work is driven by the results in my [previous paper](/publication/conference-paper/) on Neural ODE.

