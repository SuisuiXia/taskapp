from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.getTasks, name="tasks"),
    path('tasks/add/', views.addTask, name="add-task"),
    path('tasks/delete/<int:pk>/', views.deleteTask, name="delete-task"),
    path('tasks/<int:pk>/', views.getTask, name="get-task"),
]
