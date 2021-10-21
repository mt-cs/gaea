from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    return render(request, 'homepage/home.html', {'password':'intel'})
   # return HttpResponse('<h1>Hello data lake!</h1>')