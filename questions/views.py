from django.shortcuts import render
from .models import Question, Tags, Answer
from .serializers import QuestionSerializer, TagsSerializer, AnswerSerializer
from rest_framework import generics, viewsets, response, serializers, permissions
from accounts.permissions import IsOwnerAdminOrReadOnly

class QuestionListCreate(generics.ListCreateAPIView):
    queryset = Question.objects.order_by('-date')
    serializer_class = QuestionSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    author = serializers.PrimaryKeyRelatedField(
        read_only=True,
    )

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class QuestionViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset=Question.objects.order_by('-date')

    def retrieve(self, request, *args, **kwargs):
        obj = self.get_object()
        obj.view_count = obj.view_count + 1
        obj.save(update_fields=("view_count", ))
        return super().retrieve(request, *args, **kwargs)


class QuestionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
        IsOwnerAdminOrReadOnly)


class TagListCreate(generics.ListCreateAPIView):
    queryset = Tags.objects.order_by('tag')
    serializer_class = TagsSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class TagDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tags.objects.all()
    serializer_class = TagsSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class AnswerListCreate(generics.ListCreateAPIView):
    queryset = Answer.objects.order_by('-date')
    serializer_class = AnswerSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    author = serializers.PrimaryKeyRelatedField(
        read_only=True,
    )

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class AnswerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
        IsOwnerAdminOrReadOnly)
