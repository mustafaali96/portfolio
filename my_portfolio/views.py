from django.shortcuts import render

def index_view(request):
    return render(request, 'index.html')

def experience_view(request):
    return render(request, 'experience.html')

def projects_view(request):
    return render(request, 'projects.html')

def certification_view(request):
    return render(request, 'certification.html')

def publication_view(request):
    return render(request, 'publication.html')

def education_view(request):
    return render(request, 'education.html')