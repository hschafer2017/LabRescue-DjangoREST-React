from django.db import models


class Breed(models.Model):
    breed_name = models.CharField(max_length=200)
    description = models.TextField(blank=False)
    history = models.TextField(blank=False)
    origin = models.CharField(max_length=200)
    temperament = models.TextField(blank=False)
    lifespan = models.CharField(max_length=100)
    avg_weight = models.CharField(max_length=100)
    avg_height = models.CharField(max_length=100)


class Color(models.Model):
    breed_name = models.ManyToManyField(
        Breed,
        related_name='colors',
        related_query_name='colors',
    )
    color = models.CharField(max_length=100)

    def __str__(self):
        return self.color
