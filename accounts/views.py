from django.shortcuts import render, redirect, reverse
from rest_framework import generics
from .models import CustomUser
from .serializers import CustomUserSerializer


class CustomUserListView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
