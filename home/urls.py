from django.contrib import admin
from django.urls import path,include
from home import views
urlpatterns = [
    path('', views.index, name = 'index'),
    path('deletepage/', views.deletepage, name = 'delete'),
    path('deleteitem/<id>', views.deleteitem, name = 'deleteitem'),
]
