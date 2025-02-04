---
title: 'Transforming Stock Price Forecasting: Deep Learning Architectures and Strategic Feature Engineering'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Ha Xuan Son

# Author notes (optional)
author_notes:
  - 'Equal contribution'
  - 'Equal contribution'

date: '2024-08-15T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In *The 21st Modeling Decisions for Artificial Intelligence*
publication_short: In *MDAI 2024*

abstract: >
  <div style="text-align: justify;">
  This paper delves into the multifaceted landscape of stock prices, as their nature makes accurate forecasting a considerable challenge for investors and researchers. The analysis encompasses three key stock datasets: AAPL, AMZN, and MSFT. Each stock incorporates raw datasets with OHLCV information and enhanced datasets with subsets of raw data, technical, and macroeconomic indicators. Whilst, adjusted closing price is the target feature. First, we clarify the dominance of Deep Learning (DL) over Machine Learning (ML) and statistical models in predicting stock prices. While statistical and ML models, such as ARIMA, SARIMA, ETS, GARCH, SVM, RFR, and XGBoost, have shown commendable reliability, the rapid technological evolution prompts an examination of their current relevance. Eventually, their performance is surpassed by DL models, such as LSTM, CNN-Conv1D, and SimpleRNN. Preliminary findings on enhanced data assure SimpleRNN as the most precise model, exhibiting the lowest evaluation metrics (MSE and MAE). However, SimpleRNN, in comparison to additional RNN-based models, such as GRU, BiLSTM, Convolutional LSTM, and ConvLSTM2D, is outperformed by BiLSTM. Therefore, BiLSTM is applied to enhanced and raw datasets. The results confirm that BiLSTM, in association with the enhanced dataset, averagely reduce the MSE by 68.44% and the MAE by 47.78%. The overall outcome of this research is devoted to the future renovation of forecasting principles in statistics and algorithmic trading.
  </div>


# Summary. An optional shortened abstract.
summary: We introduce a simple BiLSTM, integrated with technical indicators (RSI, SMA, RSA), that outperforms traditional statistical and ML-based models by >60% in error metrics. 

tags:
  - Algorithms

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
# - name: Custom Link
#   url: http://example.org

url_pdf: https://doi.org/10.1007/978-3-031-68208-7_20

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Image credit: [**NQA**](https://drive.google.com/file/d/19jtO0PIRVmOz6XaKTe4WTWz7p_c7pvZx/view?usp=sharing)'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
# - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
