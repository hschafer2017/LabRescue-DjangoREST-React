from django.urls import path, include
from . import views



urlpatterns = [
    path('api/accounts', views.CustomUserListView.as_view()),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
