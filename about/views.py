from django.shortcuts import render

# Create your views here.
def about(request):
    contexto = {
        'titulo' : 'Sobre-Nós'
    }
    return render(
        request,
        'about/index.html',
        contexto
    )