from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import QuizGetAllSerializer, QuestionGetSelectedSerializer, ResultGetSelectedSerializer
from .models import  Option, Question, Quiz, Result, Submission
import numpy
import json

# Returns all quiz which includes quiz descriptions as text.
@api_view(['GET'])
def getQuizzes(request):
    quizzes = Quiz.objects.all()
    serializer = QuizGetAllSerializer(quizzes, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# Returns the question which selected with primary key given in endpoint.
@api_view(['GET'])
def getQuestion(request, pk):
    question = Question.objects.get(id=pk)
    serializer = QuestionGetSelectedSerializer(question)
    return Response(serializer.data, status=status.HTTP_200_OK)

# ###
@api_view(['POST'])
def submitAnswers(request, pk):
    data = json.loads(request.data)
    selected_options_ids = data['selected_options']
    selected_quiz = Quiz.objects.get(id=pk)
    result_factors = numpy.zeros(len(selected_quiz.results))
    # TODO(MBM): "selected_options" and "selected_quiz.result" length must be same. Return error if it is not.
    for selected_options_id in selected_options_ids:
        selected_option = Option.objects.get(id=selected_options_id)
        result_factors += selected_option.result_factors
    result_index = result_factors.index(max(result_factors))
    result = selected_quiz.results[result_index]
    serializer = ResultGetSelectedSerializer(result)
    return Response(serializer.data, status=status.HTTP_200_OK)
