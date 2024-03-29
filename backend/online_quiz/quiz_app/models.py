from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.core.validators import MinValueValidator

# Create your models here.

class Option(models.Model):
    description = models.CharField(max_length=100, default='')
    result_factors = ArrayField(models.PositiveIntegerField(validators=[MinValueValidator(1)]), default=list, blank=True, null=True)
    updated_date = models.DateTimeField(auto_now=True)
    created_date = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['id']
    def __str__(self):
        return f"Q: {self.question_id} | D: {self.description}"

class Question(models.Model):
    description = models.CharField(max_length=100, default='')
    options = models.ManyToManyField(Option, related_name='options', blank=True)
    updated_date = models.DateTimeField(auto_now=True)
    created_date = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['id']
    def __str__(self):
        return self.description
    
class Result(models.Model):
    description = models.CharField(max_length=100, default='')
    # TODO(MBM): Add variable for transfering images. 
    updated_date = models.DateTimeField(auto_now=True)
    created_date = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['id']
    def __str__(self):
        return self.description
    
class Quiz(models.Model):
    description = models.CharField(max_length=100, default='')
    # TODO(MBM): Add variable for transfering images. 
    questions = models.ManyToManyField(Question, related_name='questions', blank=True)
    results = models.ManyToManyField(Result, related_name='results', blank=True)
    updated_date = models.DateTimeField(auto_now=True)
    created_date = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['id']
    def __str__(self):
        return self.description
    
class Submission(models.Model):
    quiz_id = models.IntegerField(default=-1)
    selected_options_ids = ArrayField(models.PositiveIntegerField(validators=[MinValueValidator(1)]), default=list, blank=True, null=True)
    updated_date = models.DateTimeField(auto_now=True)
    created_date = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['id']
    def __str__(self):
        return self.created_date