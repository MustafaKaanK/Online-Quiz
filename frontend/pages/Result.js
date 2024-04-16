import questionStyle from '../custom_components/Question/QuestionScreen.module.css'
import { useRouter } from 'next/router';
import React, { useEffect, useState} from 'react';
import { useLocalStorage } from 'react-use';


const Result = () =>{
  const router = useRouter();
  const {testID} = router.query;
  const [responseData, setResponseData] = useState("null");
  const [animationTrigger, setAnimationTrigger] = useState(false);

 
  const [dataList] = useLocalStorage('myArray', '');
  
  const result = dataList ? dataList : '';
  console.log(result);

  useEffect(() => {
    setAnimationTrigger(true);
    const timeout = setTimeout(() => {
      setAnimationTrigger(false);
    }, 2500);
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
      return () => clearTimeout(timeout);
    
  }, []);
  const description = responseData ? responseData.description : '';
  
  //Burayı routing işleminde koycaksın
  localStorage.clear();
   
  return (
    <>
      <div className= {questionStyle.background}>
        <div className= {questionStyle.card}>
          <div className={`${questionStyle.title} ${animationTrigger ? questionStyle.fadeInEx : ''}`}>{description}</div>
            {"Create Date: "+ responseData.created_date}<br></br>
            {"Update Date: "+ responseData.updated_date}
        </div>
      </div>      
    </>
  );
};

export default Result
