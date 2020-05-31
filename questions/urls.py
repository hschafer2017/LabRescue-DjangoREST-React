from django.urls import path
from . import views


urlpatterns = [
    path('api/question', views.QuestionListCreate.as_view()),
    path('api/question/<int:pk>', views.QuestionDetail.as_view()),
    path('api/tags', views.TagListCreate.as_view()),
    path('api/tags/<int:pk>', views.TagDetail.as_view()),
    path('api/answer', views.AnswerListCreate.as_view()),
    path('api/answer/<int:pk>', views.AnswerDetail.as_view()),
]
