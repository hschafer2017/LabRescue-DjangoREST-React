from django.shortcuts import render
from .models import Question, Tags
from .serializers import QuestionSerializer, TagsSerializer
from rest_framework import generics


class QuestionListCreate(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class TagListCreate(generics.ListCreateAPIView):
    queryset = Tags.objects.all()
    serializer_class = TagsSerializer
