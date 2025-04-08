from django.db import models

# Create your models here.

class Pessoa(models.Model):
    id_pessoa = models.AutoField(primary_key=True)
    nome = models.TextField(max_length=100)
    sobrenome = models.TextField(max_length=100)
    ddd = models.TextField(max_length=3)
    telefone = models.TextField(max_length=14)
    email = models.EmailField(max_length=255)
    assunto = models.TextField()
    mensagem = models.TextField(max_length=500)