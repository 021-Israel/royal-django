from django.shortcuts import render

# Create your views here.
def termo(request):
    return render(
        request,
        'termo/index.html'
    )
