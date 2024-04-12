
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
  console.log(answersList);
  const testCount = pageData ? pageData.length : '';
  
  

//Burada querye pageData gibi değişkenleri atıp test page ine atıcaz 
  const handleClick = (input) => {  
    const testID = input+1;
    setSendData({dataList: [testID, answersList, testCount]});
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



//---------------------------------------------------










  //console.log(passedValue);
  return (
    <>
     <div className= {styles.background}>
          {buttons}
      </div>      
    </>
  );
};

export default Index;
