from my_portfolio import views
from django.urls import path
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls, name = "admin"),
    path('', views.index_view, name= "home"),
    path('Experience/', views.experience_view, name= "experience"),
    path('Projects/', views.projects_view, name= "projects"),
    path('Certification/', views.certification_view, name= "certification"),
    path('Publication/', views.publication_view, name= "publication"),
    path('Education/', views.education_view, name= "education"),
]
