from django.shortcuts import render, redirect
from my_portfolio.models import ContactUs
from django.views.generic import View

def contactUS_data(request):
    name = request.GET.get('name')
    email = request.GET.get('email')
    msg = request.GET.get('msg')
    ContactUsData = ContactUs(name=name, email=email, msg=msg)
    ContactUsData.save()

def index_view(request):
    try:
        contactUS_data(request)
        return redirect("home")
    except:
        return render(request, 'index.html')
    

def experience_view(request):
    try:
        contactUS_data(request)
        return redirect("experience")
    except:
        return render(request, 'experience.html')

def projects_view(request):
    try:
        contactUS_data(request)
        return redirect("projects")
    except:
        return render(request, 'projects.html')

def certification_view(request):
    try:
        contactUS_data(request)
        return redirect("certification")
    except:
        return render(request, 'certification.html')

def publication_view(request):
    try:
        contactUS_data(request)
        return redirect("publication")
    except:
        return render(request, 'publication.html')

def education_view(request):
    try:
        contactUS_data(request)
        return redirect("education")
    except:
        return render(request, 'education.html')