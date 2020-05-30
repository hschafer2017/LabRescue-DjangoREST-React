from rest_framework import fields, serializers
from .models import Breed, Color, Dog


GENDERS = (
    ('M', 'Male'),
    ('F', 'Female'),
)

class ChoiceField(serializers.ChoiceField):

    def to_representation(self, obj):
        return self._choices[obj]


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ('color',)


class DogSerializer(serializers.ModelSerializer):
    gender = ChoiceField(choices=Dog.GENDERS)
    colors = serializers.SlugRelatedField(
        many=True, slug_field="color", queryset=Color.objects.all())
    breed = serializers.PrimaryKeyRelatedField(queryset=Breed.objects.all())

    class Meta:
        model = Dog
        fields = ('name', 'age', 'description', 'spayed_neutered',
                  'uploaded_date', 'breed', 'colors', 'image', 'gender')

    def get_gender(self, obj):
        return obj.get_gender_display()

    def to_representation(self, instance):
        rep = super(DogSerializer, self).to_representation(instance)
        rep['breed'] = instance.breed.breed_name
        return rep


class BreedSerializer(serializers.ModelSerializer):
    colors = serializers.SlugRelatedField(
        many=True, slug_field="color", queryset=Color.objects.all())
    dogs = DogSerializer(many=True, read_only=True)

    class Meta:
        model = Breed
        fields = ('breed_name', 'description', 'history', 'origin', 'colors',
                  'temperament', 'lifespan', 'avg_weight', 'avg_height', 'dogs')
