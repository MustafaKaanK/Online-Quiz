@echo off
echo Activating the virtual environment...

call djenv\Scripts\activate.bat

echo Running Django migrations...

python manage.py makemigrations
python manage.py migrate

echo Starting the Django development server...

python manage.py runserver