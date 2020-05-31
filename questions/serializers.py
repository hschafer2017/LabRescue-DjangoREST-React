from rest_framework import fields, serializers
from .models import Question, Tags



class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = ('tag',)


class QuestionSerializer(serializers.ModelSerializer):
    tags = serializers.SlugRelatedField(
        many=True, slug_field="tag", queryset=Tags.objects.all())
    

    class Meta:
        model = Question
        fields = ('title', 'author', 'content', 'dog_owner', 'date',
            'view_count', 'tags')
