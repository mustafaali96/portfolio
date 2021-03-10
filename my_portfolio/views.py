from django.shortcuts import render

def index_view(request):
    return render(request, 'custom_app/index.html')

def experience_view(request):
    return render(request, 'custom_app/index.html')

def projects_view(request):
    return render(request, 'custom_app/index.html')

def certification_view(request):
    return render(request, 'custom_app/index.html')

def research_view(request):
    return render(request, 'custom_app/index.html')

def education_view(request):
    return render(request, 'custom_app/index.html')