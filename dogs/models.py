from django.db import models
import datetime

class Breed(models.Model):
    breed_name = models.CharField(max_length=200)
    description = models.TextField(blank=False)
    history = models.TextField(blank=False)
    origin = models.CharField(max_length=200)
    temperament = models.TextField(blank=False)
    lifespan = models.CharField(max_length=100)
    avg_weight = models.CharField(max_length=100)
    avg_height = models.CharField(max_length=100)
    image = models.ImageField(upload_to='')

    def __str__(self):
        return self.breed_name


class Dog(models.Model):
    GENDERS = (
    ('M', 'Male'),
    ('F', 'Female'),
)

    name = models.CharField(max_length=200)
    age = models.CharField(max_length=100)
    gender = models.CharField(choices=GENDERS, max_length=15)
    description = models.TextField()
    spayed_neutered = models.BooleanField(null=True)
    image = models.ImageField(upload_to='')
    uploaded_date = models.DateField(default=datetime.date.today)
    breed = models.ForeignKey(
        'Breed', on_delete=models.CASCADE, related_name='breed')

    class Meta:
        unique_together = ('breed', 'name')
        ordering = ['breed']

    def __str__(self):
        return f'{self.name} - {self.breed.breed_name}'


class Color(models.Model):
    breed_name = models.ManyToManyField(
        Breed,
        related_name='colors',
        related_query_name='colors',
    )
    dog_name = models.ManyToManyField(
        Dog,
        related_name='colors',
        related_query_name='colors',
    )
    color = models.CharField(max_length=100)

    def __str__(self):
        return self.color
