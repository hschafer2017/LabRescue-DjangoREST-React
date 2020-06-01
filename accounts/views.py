from django.shortcuts import render, redirect, reverse
from rest_framework import generics
from .models import CustomUser
from .serializers import CustomUserSerializer
from .permissions import IsAdmin


class CustomUserListView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = (IsAdmin,)
