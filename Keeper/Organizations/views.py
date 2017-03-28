from django.shortcuts import render


def index(request, template='Organizations/base.html'):
    return render(request, template)