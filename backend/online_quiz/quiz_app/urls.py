from django.urls import path
from . import views

urlpatterns = [
    path('quizzes/', views.getQuizzes),
    path('que:<str:pk>/question/', views.getQuestion),
    path('qui:<str:pk>/submit/', views.submitAnswers),
]