
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import questionStyle from './QuestionScreen.module.css'
import { useLocalStorage } from 'react-use';


const Question = ({testID, answersList, testCount}) =>{
  let abc = [1];

  const router = useRouter();
  const [slug, setSlug] = useState(1);
  const [pageData, setPageData] = useState(null);
  const [sendData, setSendData] = useLocalStorage('myArray', []);

   
  const questionQuantity = testCount;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/quizzes/${testID}/questions/${slug}`);
        if (response.ok){
        const jsonData = await response.json();
        setPageData(jsonData);
      }
      } catch (error) {
        console.error('Error fetching page data:', error);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);


  const description = pageData ? pageData.description : '';
  const optionsslug = pageData ? pageData.options : [];
  
 const testID1 = testID;
  
  const handleClick = (input) => {
    setSendData(prev => {prev.push(input + 1); return prev;});
    console.log("sendData verisi:");
    

    if(questionQuantity == slug){


     router.push({
      pathname:'/Result',
      query: {testID
      },
    });
    }
    else{
    setSlug(prevSlug => prevSlug + 1);
    }
   };

   

   const optionArray = [];
   optionsslug.forEach((obj, index) => {
    const value = obj.description;
    optionArray.push(
      <div key={index} className={questionStyle.option} onClick={() => handleClick(index)}>{value}</div>
    );
  });




  

return (
    <>
      <div className= {questionStyle.background}>
        <div className= {questionStyle.card}>
          <div className={questionStyle.title}>{description}</div>
          <div className={questionStyle.optionBox}>
            {optionArray}
          </div>          
        </div>
      </div>      
    </>
  );
};

export default Question
