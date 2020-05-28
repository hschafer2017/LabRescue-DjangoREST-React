from rest_framework import fields, serializers
from .models import Breed, Color




class BreedSerializer(serializers.ModelSerializer):
    colors = serializers.SlugRelatedField(many=True, slug_field="color", queryset=Color.objects.all())

    class Meta:
        model = Breed
        fields = ('breed_name', 'description', 'history', 'origin', 'colors',
                  'temperament', 'lifespan', 'avg_weight', 'avg_height')


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ('color',)
