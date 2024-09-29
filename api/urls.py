from django.urls import path
from .views import predict
from .views import train_view

urlpatterns = [
    path('predict/', predict, name='predict'),
    path('train/', train_view, name='train_model'),
]