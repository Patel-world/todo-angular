from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import TodoListView,TodoUpdate,TodoDeleteView

urlpatterns = [
    path('todos/', TodoListView.as_view(),name='todos'),
    path('todos/update/<int:pk>/', TodoUpdate.as_view(),name='update'),
    path('todos/delete/<int:pk>/', TodoDeleteView.as_view(),name='delete'),
    
]

urlpatterns = format_suffix_patterns(urlpatterns)