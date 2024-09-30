from django.db import models
from datasets.csv_loader import load_csv
import pandas as pd
import numpy as np
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score
import joblib
import os
from django.conf import settings



# -------------------------------------------------------------------------------

def preprocess_text(text):
    stop_words = set(stopwords.words('english'))
    # Tokenize the text
    tokens = word_tokenize(text.lower())
    # Remove stopwords
    tokens = [word for word in tokens if word.isalpha() and word not in stop_words]
    return ' '.join(tokens)

def load_dataset(data):
    data['cleaned_comment'] = data['text'].apply(preprocess_text)
    return data

# Train a model on the dataset
def train_model():
    nltk.download('punkt')
    nltk.download('stopwords')


    data = load_csv().head(3000) 
    data = load_dataset(data)

 
    vectorizer = TfidfVectorizer(max_features=5000)
    X = vectorizer.fit_transform(data['cleaned_comment'])
    y = data['label']


    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train a SVM classifier
    model = SVC(kernel='linear', random_state=42)
    model.fit(X_train, y_train)

    # Evaluate the model
    y_pred = model.predict(X_test)
    print("Accuracy percentage:", accuracy_score(y_test, y_pred) * 100)

   
    model_file_path = os.path.join(settings.BASE_DIR, 'training', 'svm_model.pkl')
    vectorizer_file_path = os.path.join(settings.BASE_DIR, 'training', 'vectorizer.pkl')

  
    os.makedirs(os.path.dirname(model_file_path), exist_ok=True)

    # Save the model and vectorizer
    joblib.dump(model, model_file_path)
    joblib.dump(vectorizer, vectorizer_file_path)
    
    return model, vectorizer

