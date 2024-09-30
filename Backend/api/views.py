from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
import joblib
import os
from django.conf import settings
import pandas as pd
from .models import train_model 
from .scrap import get_comments


# ---------------------------------------------------------------------------------------------

def load_model_and_vectorizer():
    model_file_path = os.path.join(settings.BASE_DIR, 'training', 'svm_model.pkl')
    vectorizer_file_path = os.path.join(settings.BASE_DIR, 'training', 'vectorizer.pkl')

    # Load the model and vectorizer
    model = joblib.load(model_file_path)
    vectorizer = joblib.load(vectorizer_file_path)

    return model, vectorizer



    

@api_view(['POST'])
def train_view(request):
   
    try:
        train_model()  # Call the training function
        return Response({"message": "Training complete"}, status=200)
    except Exception as e:
        return Response({"error": str(e)}, status=500)






@api_view(['POST'])
def predict(request):
    try:
        model, vectorizer = load_model_and_vectorizer()
        
        url = request.data['url']
        comments = get_comments(url)
       
        X_new = vectorizer.transform(comments)
        pred = model.predict(X_new)
        

        joy,fear,anger,sadness = 0,0,0,0
        joyPerc,fearPerc,angerPerc,sadnessPerc = 0,0,0,0
        total = len(comments)

        for label in pred:
            if label=='joy':
                joy+=1
                joyPerc = (joy*100)/total
            if label=='fear':
                fear+=1
                fearPerc = (fear*100)/total
            if label=='anger':
                anger+=1
                angerPerc = (anger*100)/total
            if label=='sadness':
                sadness+=1
                sadnessPerc = (sadness*100)/total
                
      

        return Response({'prediction': {
            "Joy": joyPerc,
            "Fear": fearPerc,
            "Anger": angerPerc,
            "Sadness": sadnessPerc
            }
            })
    
    
    except Exception as e:
        return Response({'error': str(e)})

