from django.shortcuts import render
from .models import Project
# Create your views here.

def index(request):

    return render(request,'projects_app/index.html')

def projects(request):
    #need to create a list with all the projects

    projects_list = Project.objects.order_by('-date')  # creates a list of objects

    my_projects= {
        'projects':projects_list
        }

    return render(request,'projects_app/projects.html', context=my_projects)
