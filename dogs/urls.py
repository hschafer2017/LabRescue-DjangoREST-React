from django.urls import path
from . import views


urlpatterns = [
    path('api/breed', views.BreedListCreate.as_view()),
]
