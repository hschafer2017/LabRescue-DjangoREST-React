from rest_framework import fields, serializers
from .models import Question, Tags, Answer



class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = ('tag',)


class AnswerSerializer(serializers.ModelSerializer):
    question = serializers.PrimaryKeyRelatedField(
        queryset=Question.objects.all())

    class Meta:
        model = Answer
        fields = ('author', 'content', 'date', 'dog_owner', 'question')

    def to_representation(self, instance):
        rep = super(AnswerSerializer, self).to_representation(instance)
        rep['question'] = instance.question.title
        return rep


class QuestionSerializer(serializers.ModelSerializer):
    tags = serializers.SlugRelatedField(
        many=True, slug_field="tag", queryset=Tags.objects.all())
    answer = AnswerSerializer(many=True, read_only=True)
    

    class Meta:
        model = Question
        fields = ('title', 'author', 'content', 'dog_owner', 'date',
            'view_count', 'tags', 'answer')
