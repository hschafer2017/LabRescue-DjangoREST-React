from django.shortcuts import render
from .models import Question, Tags, Answer
from .serializers import QuestionSerializer, TagsSerializer, AnswerSerializer
from rest_framework import generics


class QuestionListCreate(generics.ListCreateAPIView):
    queryset = Question.objects.order_by('-date')
    serializer_class = QuestionSerializer


class QuestionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class TagListCreate(generics.ListCreateAPIView):
    queryset = Tags.objects.order_by('tag')
    serializer_class = TagsSerializer


class TagDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tags.objects.all()
    serializer_class = TagsSerializer


class AnswerListCreate(generics.ListCreateAPIView):
    queryset = Answer.objects.order_by('-date')
    serializer_class = AnswerSerializer


class AnswerDetail(generics.ListCreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
