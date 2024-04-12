import questionStyle from '../custom_components/Question/QuestionScreen.module.css'
import { useRouter } from 'next/router';
import React, { useEffect, useState} from 'react';
import { useLocalStorage } from 'react-use';

const Result = () =>{
  const router = useRouter();
  const {testID} = router.query;
  const [responseData, setResponseData] = useState("null");

  const [dataList] = useLocalStorage('myArray', '');
  const result = dataList ? dataList : '';
  
  console.log(result);
  
  /*
  setSendData({dataList: [testID, answersList, testCount]});

  const [dataList] = useLocalStorage('myData', '');
  const testID = dataList ? dataList.dataList[0]: ''; 
  const answersList = dataList ? dataList.dataList[1]: ''; 
  const testCount = dataList ? dataList.dataList[2]: ''; 
  */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = {
          selected_options: result
        };
        const response = await fetch(`http://localhost:8000/quizzes/${testID}/submission/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        if (response.ok){
        const data = await response.json();
        setResponseData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    
      fetchData();
    
  }, []);
  const description = responseData ? responseData.description : '';
  localStorage.clear();
   
  return (
    <>
      <div className= {questionStyle.background}>
        <div className= {questionStyle.card}>
          <div className={questionStyle.title}>{description}</div>
            {"Create Date: "+responseData.created_date}<br></br>
            {"Update Date: "+responseData.updated_date}
        </div>
      </div>      
    </>
  );
};

export default Result
