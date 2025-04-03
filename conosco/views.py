from django.shortcuts import render

# Create your views here.
def conosco(request):
    return render(
        request,
        'conosco/index.html'
    )
