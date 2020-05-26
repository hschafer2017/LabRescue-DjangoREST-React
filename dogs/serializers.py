from rest_framework import fields, serializers
from .models import Breed


COLORS = (
    ('Grey', 'Grey'),
    ('White', 'White'),
    ('Black', 'Black'),
    ('Brown', 'Brown'),
)



class BreedSerializer(serializers.ModelSerializer):
    colors = fields.MultipleChoiceField(choices=COLORS)
    class Meta:
        model = Breed
        fields = ('breed_name', 'description', 'history', 'origin', 'colors',
                  'temperament', 'lifespan', 'avg_weight', 'avg_height')
