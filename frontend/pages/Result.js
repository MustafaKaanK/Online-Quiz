import questionStyle from '../custom_components/Question/QuestionScreen.module.css'
import { useRouter } from 'next/router';
import React, { useEffect, useState} from 'react';
import { useLocalStorage } from 'react-use';
import imgStyles from '../custom_components/Images/img.module.css';


const Result = () =>{
  const router = useRouter();
  const {testID} = router.query;
  const [responseData, setResponseData] = useState(`null`);
  const [animationTrigger, setAnimationTrigger] = useState(false);
 
  const [dataList] = useLocalStorage('myArray', '');
  const [newID, setnewID] = useLocalStorage('newID', '');

  const name = "12345";
  
  const result = dataList ? dataList : '';

  
  useEffect(() => {
    setAnimationTrigger(false);
    if (testID) {
      setnewID(testID); // Setting testID in localStorage
    } 
      setAnimationTrigger(true);
      const timeout = setTimeout(() => {
        setAnimationTrigger(false);
      }, 2500);
    
      return () => clearTimeout(timeout);
    
  }, [newID]);
  

  useEffect(() => {
    
    
    const fetchData = async () => {
      try {
        const payload = {
          selected_options: result
        };
        const response = await fetch(`http://localhost:8000/quizzes/${newID}/submission/`, {
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
    
    if(newID){
      fetchData();
    }
    
  }, [newID]);

  const description = responseData ? responseData.description : '';

  const handleclick = () => {/*
    router.push({
      pathname:'/'
  })*/}
  
  //Burayı routing işleminde koycaksın
  
   
  return (
    <>
      <div className= {questionStyle.background}>
        <div className= {`${questionStyle.Resultcard} ${questionStyle.cardResult}`}>
          <div className={`${questionStyle.optionBox} ${animationTrigger ? questionStyle.smallToBig : ''}` } onClick= {() => handleclick()}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1vh", fontSize: "3vh", color: "rgba(0, 0, 0, 1)"}}>
            <img src={`${name}.jpg`} className={imgStyles.img} alt="Image" /> 
            <br/>
            <div>
             {description}
            </div>
            <div > 
             {"Create Date: " + responseData.created_date}
            </div>
            <div s>
             {"Update Date: " + responseData.updated_date}
            </div>
            </div> 
          </div>            
        </div>
      </div>   
    </>
  );
};

export default Result
