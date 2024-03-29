from rest_framework.serializers import ModelSerializer
from .models import Option, Question, Result, Quiz, Submission

# Serializers for .../quizzes/ -> GET Request
class QuestionOnlyIdsSerializer(ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'description')

class QuizGetAllSerializer(ModelSerializer):
    questions = QuestionOnlyIdsSerializer(many=True)
    class Meta:
        model = Quiz
        fields = ('id', 'description', 'questions', 'updated_date', 'created_date')


# Serializers for .../que:<id>/question/ -> GET Request
class OptionsOnlyIdAndDescSerializer(ModelSerializer):
    class Meta:
        model = Option
        fields = ('id', 'description')

class QuestionGetSelectedSerializer(ModelSerializer):
    options = OptionsOnlyIdAndDescSerializer(many=True)
    class Meta:
        model = Question
        fields = ('id', 'description', 'options', 'created_date', 'updated_date')


# Serializers for .../qui:<id>/submit/ -> POST Request
class ResultGetSelectedSerializer(ModelSerializer):
    class Meta:
        model = Result
        fields = ('id', 'description')