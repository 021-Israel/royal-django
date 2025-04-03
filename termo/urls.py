from django.urls import path
from . import views

urlpatterns = [
    path('', views.termo, name='termo')
]