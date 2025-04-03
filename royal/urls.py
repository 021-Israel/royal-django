from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('about/', include('about.urls')),
    path('conosco/',include('conosco.urls')),
    path('produto/',include('produto.urls')),
    path('termo/', include('termo.urls')),
    path('contato/', include('contato.urls')),
]
