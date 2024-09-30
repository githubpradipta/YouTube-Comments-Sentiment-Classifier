# YouTube Comments Sentiment Classifier

## Overview
The YouTube Comments Sentiment Classifier is a powerful sentiment analysis tool that allows users to analyze the emotional tone of comments on YouTube videos. By simply inputting a video URL, users can gain insights into audience sentiment categorized into four emotions: Joy, Fear, Anger, and Sadness. This project aims to assist content creators, marketers, and researchers in understanding viewer reactions and improving audience engagement.

## Features
- **Sentiment Analysis:** Classifies comments into four emotional categories: Joy, Fear, Anger, and Sadness.
- **Real-Time Scraping:** Utilizes the Google API to scrape comments directly from YouTube videos.
- **Interactive Frontend:** Built with React for a dynamic and user-friendly interface, allowing seamless interaction with the application.
- **Django Backend:** Implements robust APIs using Django, connecting the frontend with the machine learning model for efficient data processing.
- **High Accuracy:** The sentiment classification model is trained using Support Vector Machine (SVM) and achieves an accuracy rate of 92.64%.

## Tech Stack
- **Frontend:** React
- **Backend:** Django
- **Machine Learning:** Support Vector Machine (SVM)
- **Natural Language Processing:** NLTK
- **Data Processing:** scikit-learn
- **API Interaction:** Google API for scraping YouTube comments

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/YouTube-Comments-Sentiment-Classifier.git

2. Navigate to the project directory:
    ```bash 
    cd YouTube-Comments-Sentiment-Classifier
3. Install the required dependencies for both frontend and backend.

4. Run the Django server to start the backend API:
    ```bash
    python manage.py runserver

5. Start the React application:
    ```bash
    npm install
    npm run dev

## Usage
To use the application, input the URL of a YouTube video in the provided field and click the analyze button. The sentiment breakdown will be displayed, showing the distribution of emotions in the comments.

## Contributions
Contributions are welcome! Please feel free to open issues or submit pull requests for improvements or new features.

