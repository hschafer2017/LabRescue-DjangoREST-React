from django.db import models
from django.utils import timezone



class Question(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    content = models.TextField(blank=False)
    dog_owner = models.BooleanField(null=True)
    date = models.DateField(
        blank=True, null=True, default=timezone.now)
    view_count = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.author}: {self.title}'


class Tags(models.Model):
    question_name = models.ManyToManyField(
        Question,
        related_name='tags',
        related_query_name='tags',
    )
    tag = models.CharField(max_length=100)

    def __str__(self):
        return self.tag
