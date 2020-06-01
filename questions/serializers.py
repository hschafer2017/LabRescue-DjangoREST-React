from rest_framework import fields, serializers
from .models import Question, Tags, Answer



class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = ('tag',)


class AnswerSerializer(serializers.ModelSerializer):
    question = serializers.PrimaryKeyRelatedField(
        queryset=Question.objects.all())
    author = serializers.PrimaryKeyRelatedField(read_only=True,
        default=serializers.CurrentUserDefault())

    class Meta:
        model = Answer
        fields = ('author', 'content', 'date', 'dog_owner', 'question')

    def to_representation(self, instance):
        rep = super(AnswerSerializer, self).to_representation(instance)
        rep['question'] = instance.question.title
        rep['author'] = instance.author.username
        return rep


class QuestionSerializer(serializers.ModelSerializer):
    tags = serializers.SlugRelatedField(
        many=True, slug_field="tag", queryset=Tags.objects.all())
    answers = AnswerSerializer(source='answer', read_only=True, many=True)
    author = serializers.PrimaryKeyRelatedField(
        read_only=True, default=serializers.CurrentUserDefault())
    

    class Meta:
        model = Question
        fields = ('title', 'author', 'content', 'dog_owner', 'date',
            'view_count', 'tags', 'answers')

    def to_representation(self, instance):
        rep = super(QuestionSerializer, self).to_representation(instance)
        rep['author'] = instance.author.username
        return rep
