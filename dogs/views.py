from django.shortcuts import render
from .models import Breed
from .serializers import BreedSerializer
from rest_framework import generics


class BreedListCreate(generics.ListCreateAPIView):
    queryset = Breed.objects.all()
    serializer_class = BreedSerializer
