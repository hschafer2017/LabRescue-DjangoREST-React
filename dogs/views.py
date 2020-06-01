from django.shortcuts import render
from .models import Breed, Color, Dog
from .serializers import BreedSerializer, ColorSerializer, DogSerializer
from rest_framework import generics
from accounts.permissions import IsAdminOrReadOnly


class BreedListCreate(generics.ListCreateAPIView):
    queryset = Breed.objects.order_by('breed_name')
    serializer_class = BreedSerializer
    permission_classes = (IsAdminOrReadOnly,)


class BreedDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Breed.objects.all()
    serializer_class = BreedSerializer
    permission_classes = (IsAdminOrReadOnly,)


class ColorListCreate(generics.ListCreateAPIView):
    queryset = Color.objects.order_by('color')
    serializer_class = ColorSerializer
    permission_classes = (IsAdminOrReadOnly,)


class ColorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer
    permission_classes = (IsAdminOrReadOnly,)


class DogListCreate(generics.ListCreateAPIView):
    queryset = Dog.objects.order_by('name')
    serializer_class = DogSerializer
    permission_classes = (IsAdminOrReadOnly,)


class DogDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Dog.objects.all()
    serializer_class = DogSerializer
    permission_classes = (IsAdminOrReadOnly,)
