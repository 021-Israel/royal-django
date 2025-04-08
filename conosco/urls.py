from django.urls import path
from . import views 

urlpatterns =[
    path('', views.conosco, name='conosco'),
    path('gravar/', views.gravar, name="gravar"),
]