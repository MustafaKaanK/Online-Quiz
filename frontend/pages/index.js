
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Button from '../custom_components/Button/Button'; // Import the Button component
import styles from '../styles/index.module.css';
import { useLocalStorage } from 'react-use';


const Index = () => {
  const router = useRouter();
  const [pageData, setPageData] = useState(null);
  const [sendData, setSendData] = useLocalStorage('myData', '');

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/quizzes/`);
        if (response.ok) {
          const data = await response.json();
          setPageData(data);
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const answersList = [];

  const testCount = pageData ? pageData.length : '';

  
  

//Burada querye pageData gibi değişkenleri atıp test page ine atıcaz 
  const handleClick = (input) => {  
    const testID = input+1;
    const testData = pageData.find(item => item.id == testID);
    const questionCount = testData.questions.length;
    setSendData({dataList: [testID, answersList, questionCount]});
    router.push({
      pathname:'/test_page',
      query: {
        testID /*
        answersList: JSON.stringify(answersList),
        testCount*/
      },
    });
    
  };

  

  //Array according to test count
  const buttons = [];
  for (let i = 0; i < testCount; i++) {
    buttons.push(
      <Button key={i} onClick={() => handleClick(i)} children={`${i+1}`}></Button>
    );
  }


  return (
    <>
     <div className= {styles.background}>
          {buttons}
      </div>      
    </>
  );
};

export default Index;
