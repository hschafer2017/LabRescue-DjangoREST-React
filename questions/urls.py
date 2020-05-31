from django.urls import path
from . import views


urlpatterns = [
    path('api/question', views.QuestionListCreate.as_view()),
    path('api/tags', views.TagListCreate.as_view()),
]