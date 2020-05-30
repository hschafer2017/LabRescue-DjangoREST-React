from django.urls import path
from . import views


urlpatterns = [
    path('api/breed', views.BreedListCreate.as_view()),
    path('api/breed/<int:pk>', views.BreedDetail.as_view()),
    path('api/color', views.ColorListCreate.as_view()),
    path('api/color/<int:pk>', views.ColorDetail.as_view()),
    path('api/dog', views.DogListCreate.as_view()),
    path('api/dog/<int:pk>', views.DogDetail.as_view()),
]
