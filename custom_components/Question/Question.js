
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


import questionStyle from './QuestionScreen.module.css'


const Question = (question, options) =>{


  const router = useRouter();
  const { slug } = router.query;
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/pages/${slug}`);
        const jsonData = await response.json();
        setPageData(jsonData);
      } catch (error) {
        console.error('Error fetching page data:', error);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);







  const database = {
    "quizzes": [
      {
        "id": 1,
        "title": "Quiz 1",
        "picture": "quiz1.jpg",
        "questions": [
          {
            "id": 1,
            "question": "What is the capital of France?",
            "options": ["Paris", "London", "Berlin", "Rome"]
          },
          {
            "id": 2,
            "question": "What is the largest mammal?",
            "options": ["Elephant", "Blue whale", "Giraffe", "Lion"]
          },
          {
            "id": 3,
            "question": "Who wrote 'Romeo and Juliet'?",
            "options": ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"]
          },
          {
            "id": 4,
            "question": "What is 2 + 2?",
            "options": ["3", "4", "5", "6"]
          },
          {
            "id": 5,
            "question": "What is the chemical symbol for gold?",
            "options": ["Au", "Ag", "Fe", "Hg"]
          }
        ],
        "result": [1, 2, 3, 4, 5]
      },
      {
        "id": 2,
        "title": "Quiz 2",
        "picture": "quiz2.jpg",
        "questions": [
          {
            "id": 1,
            "question": "What is the capital of Japan?",
            "options": ["Tokyo", "Seoul", "Beijing", "Bangkok"]
          },
          {
            "id": 2,
            "question": "What is the chemical symbol for water?",
            "options": ["H2O", "CO2", "NaCl", "O2"]
          },
          {
            "id": 3,
            "question": "Who painted the Mona Lisa?",
            "options": ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"]
          },
          {
            "id": 4,
            "question": "What is the square root of 16?",
            "options": ["2", "4", "8", "16"]
          },
          {
            "id": 5,
            "question": "What is the capital of Australia?",
            "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"]
          }
        ],
        "result": [1, 2, 3, 4, 5]
      },
      {
        "id": 3,
        "title": "Quiz 3",
        "picture": "quiz3.jpg",
        "questions": [
          {
            "id": 1,
            "question": "What is the largest planet in our solar system?",
            "options": ["Jupiter", "Mars", "Venus", "Saturn"]
          },
          {
            "id": 2,
            "question": "What is the chemical symbol for oxygen?",
            "options": ["O2", "H2O", "CO2", "N2"]
          },
          {
            "id": 3,
            "question": "Who is known as the 'Father of Computers'?",
            "options": ["Alan Turing", "Charles Babbage", "Ada Lovelace", "Bill Gates"]
          },
          {
            "id": 4,
            "question": "What is the boiling point of water in Celsius?",
            "options": ["0", "100", "-10", "50"]
          },
          {
            "id": 5,
            "question": "Who wrote 'To Kill a Mockingbird'?",
            "options": ["Harper Lee", "Mark Twain", "J.K. Rowling", "Charles Dickens"]
          }
        ],
        "result": [1, 2, 3, 4, 5]
      },
      {
        "id": 4,
        "title": "Quiz 4",
        "picture": "quiz4.jpg",
        "questions": [
          {
            "id": 1,
            "question": "What is the currency of Japan?",
            "options": ["Yen", "Dollar", "Euro", "Pound"]
          },
          {
            "id": 2,
            "question": "What is the chemical symbol for sodium?",
            "options": ["Na", "S", "Au", "Hg"]
          },
          {
            "id": 3,
            "question": "Who discovered penicillin?",
            "options": ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Robert Koch"]
          },
          {
            "id": 4,
            "question": "What is the freezing point of water in Fahrenheit?",
            "options": ["32", "0", "100", "212"]
          },
          {
            "id": 5,
            "question": "Who wrote '1984'?",
            "options": ["George Orwell", "Ray Bradbury", "H.G. Wells", "Aldous Huxley"]
          }
        ],
        "result": [1, 2, 3, 4, 5]
      },
      {
        "id": 5,
        "title": "Quiz 5",
        "picture": "quiz5.jpg",
        "questions": [
          {
            "id": 1,
            "question": "What is the capital of Brazil?",
            "options": ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"]
          },
          {
            "id": 2,
            "question": "What is the chemical symbol for carbon?",
            "options": ["C", "Co", "Ca", "Cr"]
          },
          {
            "id": 3,
            "question": "Who is the author of 'The Great Gatsby'?",
            "options": ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "Harper Lee"]
          },
          {
            "id": 4,
            "question": "What is the population of China (approximately)?",
            "options": ["1 billion", "2 billion", "500 million", "1.5 billion"]
          },
          {
            "id": 5,
            "question": "Who directed the movie 'Inception'?",
            "options": ["Christopher Nolan", "Quentin Tarantino", "Steven Spielberg", "James Cameron"]
          }
        ],
        "result": [1, 2, 3, 4, 5]
      }
    ]
  }
  


const quiz1 = database.quizzes.find(quiz => quiz.id===1)
const options1 = quiz1.questions.find(quiz => quiz.id===1)

console.log(options1);










  



  const question1 = "IF YOU COULD ONLY EAT ONE TYPE OF CUISINE FOR THE REST OF YOUR LIFE, WHAT WOULD IT BE?";
  const numberOfTests = 4;
  const answer = "This is an option, This is an option, This is an option, This is an option, This is an option, This is an option, This is an option,"
  
 

  const handleClick = () => {
    router.push('/');
    
  };
  

  const buttons = [];
for (let i = 0; i < numberOfTests; i++) {
  buttons.push(
    <div className= {questionStyle.option} onClick = {handleClick} >{options1.options[i]}</div>
  );
}
//asdstyle={{ padding: "10px 8px",overflow: "unset",wordBreak: "break-all",border: "1px solid black",overflow: "hidden", flexWrap: "wrap", display: "flex", height: "25vh", width: "27vw", margin: "5px", borderRadius: "7px", backgroundColor: "blue", color: "red", alignItems: "flex-start", boxSizing: "border-box"}}

  return (
    <>
      <div className= {questionStyle.background}>
        <div className= {questionStyle.card}>
          <div className={questionStyle.title}>{options1.question}</div>
          <div className={questionStyle.optionBox}>
             {buttons} 
          </div>          
        </div>
      </div>      
    </>
  );
};

export default Question
