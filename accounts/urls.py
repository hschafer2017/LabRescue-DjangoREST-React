from django.urls import path, include
from . import views


urlpatterns = [
    path('api/accounts', views.CustomUserListView.as_view()),
]
