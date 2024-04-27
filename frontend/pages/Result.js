import questionStyle from '../styles/result.module.css'
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
  const index = description ? description.indexOf('/'): '';
  const descriptionTitle = description && index ? description.slice(0, index): '';
  const descriptionText = description && index ? description.slice(index + 1): '';
  console.log(description == undefined);
  console.log(descriptionText);
  /*
  const index = description ? description.indexOf('/'): '';
  const descriptionTitle = description.slice(0, index);
  const descriptionText = description.slice(index + 1);
*/
  const handleclick = () => {
    router.push({
      pathname:'/'
  })}
  
  //Burayı routing işleminde koycaksın
  
   //optionbox kısmını sil
  return (
    <>
      <div className= {questionStyle.background}>
        <div className= {`${questionStyle.Resultcard} ${questionStyle.cardResult}`}>
          <div className={`${questionStyle.optionBox} ${animationTrigger ? questionStyle.smallToBig : ''}` }>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "left", textAlign: "center", gap: "1vh", fontSize: "3vh", color: "rgba(0, 0, 0, 1)"}}>
            <img src={`${descriptionTitle}.jpg`} className={imgStyles.img} alt="Image" /> 
            <br/>
            <div>
             {descriptionTitle}
            </div>
            <div > 
             {descriptionText} </div>
            <div s>
             {"Update Date: " + responseData.updated_date}
            </div>
            <div className= {questionStyle.button} onClick={() => handleclick()}>

            </div>
            </div> 
          </div>            
        </div>
      </div>   
    </>
  );
};

export default Result
