from django.shortcuts import render

from conosco.models import Pessoa

# Create your views here.
def conosco(request):
    contexto = {
        'titulo': 'Fale Conosco',
        'pessoas' : Pessoa.objects.all(),
    }
    return render(
        request,
        'conosco/index.html',
        contexto,
    )

def gravar(request):
    nova_pessoa = Pessoa()
    nova_pessoa.nome = request.POST.get('primeiroNome')
    nova_pessoa.sobrenome = request.POST.get('sobrenome')
    nova_pessoa.ddd = request.POST.get('ddd')
    nova_pessoa.telefone = request.POST.get('telefone')
    nova_pessoa.email = request.POST.get('email')
    nova_pessoa.assunto = request.POST.get('assunto')
    nova_pessoa.mensagem = request.POST.get('mensagem')
    nova_pessoa.save()
    return conosco(request)