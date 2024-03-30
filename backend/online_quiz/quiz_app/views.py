from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import OptionSimplifiedSerializer, OptionDetailedSerializer, QuestionSimplifiedSerializer, QuestionDetailedSerializer, QuizSimplifiedSerializer, QuizDetailedSerializer, ResultDetailedSerializer
from .models import  Option, Question, Quiz, Result, Submission
import numpy as np

# Returns all quiz which includes quiz descriptions as text.
# .../quizzes/
@api_view(['GET'])
def getQuizzes(request):
    quizzes = Quiz.objects.all()
    serializer = QuizSimplifiedSerializer(quizzes, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# TODO(MBM): Add comment here.
# .../quizzes/<str:pk>/
@api_view(['GET'])
def getQuiz(request, pk):
    quiz = Quiz.objects.get(id=pk)
    serializer = QuizDetailedSerializer(quiz)
    return Response(serializer.data, status=status.HTTP_200_OK)

# TODO(MBM): Add comment here.
# .../quizzes/<str:pk>/questions/
@api_view(['GET'])
def getQuestions(request, pk):
    quiz = Quiz.objects.get(id=pk)
    questions = quiz.questions.all()
    serializer = QuestionSimplifiedSerializer(questions, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# TODO(MBM): Add comment here.
# .../quizzes/<str:pk>/questions/<str:pk>/
@api_view(['GET'])
def getQuestion(request, pk1, pk2):
    quiz = Quiz.objects.get(id=pk1)
    question = quiz.questions.get(number_order=pk2)
    serializer = QuestionDetailedSerializer(question)
    return Response(serializer.data, status=status.HTTP_200_OK)

# TODO(MBM): Add comment here.
# .../quizzes/<str:pk>/submission/
@api_view(['POST'])
def submitAnswers(request, pk):
    selected_options_nums = request.data['selected_options']
    selected_quiz = Quiz.objects.get(id=pk)
    result_factor_list = np.zeros(selected_quiz.results.count())
    # TODO(MBM): "selected_options" and "selected_quiz.result" length must be same. Return error if it is not.
    for i in range(1, len(selected_options_nums) + 1):
        selected_question = selected_quiz.questions.get(number_order=i)
        selected_option = selected_question.options.get(number_order=selected_options_nums[i - 1])
        result_factor_list += selected_option.result_factor_list
    result_index = np.argmax(result_factor_list)
    result = selected_quiz.results.all().order_by('id')[int(result_index)]
    serializer = ResultDetailedSerializer(result)
    return Response(serializer.data, status=status.HTTP_200_OK)