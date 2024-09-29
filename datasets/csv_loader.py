import os
import pandas as pd
from django.conf import settings

def load_csv():
    """
    Function to load the CSV file from the datasets folder.
    Returns a pandas DataFrame containing the CSV data.
    """
    csv_path = os.path.join(settings.BASE_DIR, 'datasets', 'data.csv')
    
    try:
        # Load the CSV file into a pandas DataFrame
        data = pd.read_csv(csv_path)
        return data
    except FileNotFoundError:
        raise FileNotFoundError(f"CSV file not found at path: {csv_path}")
