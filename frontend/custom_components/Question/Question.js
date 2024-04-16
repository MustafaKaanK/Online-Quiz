
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import questionStyle from './QuestionScreen.module.css'
import { useLocalStorage } from 'react-use';
import dynamic from "next/dynamic";



const Question = ({testID, answersList, questionCount}) =>{
  let abc = [1];

  const router = useRouter();
  const [slug, setSlug] = useState(1);
  const [pageData, setPageData] = useState(null);
  const [sendData, setSendData] = useLocalStorage('myArray', []);
  const [animationTrigger, setAnimationTrigger] = useState(false);
   
  
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
    
    setAnimationTrigger(true);
    const timeout = setTimeout(() => {
      setAnimationTrigger(false);
    }, 1200);
    return () => clearTimeout(timeout);
  }, [slug]);


  const description = pageData ? pageData.description : '';
  const optionsslug = pageData ? pageData.options : [];
  
 const testID1 = testID;
  
  const handleClick = (input) => {
    setSendData(prev => {prev.push(input + 1); return prev;});
    console.log("sendData verisi:");
    

    if(questionCount == slug){


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


   const handlePrevious = () => {
    if(slug > 1){
    setSendData(prev => {prev.pop(); return prev;});    
    
    setSlug(prevSlug => prevSlug -1);
    }

    if(slug == 1){
      router.push({
        pathname:'/'        
      });
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
      <div className={`${questionStyle.card}`}>
          <div style={{display: 'flex', flexWrap: "wrap", flexDirection: "row", width: "75vw", justifyContent: "space-evenly", alignItems: "center", justifyItems: "space-between", bottom: "0px"}}>
           <div className= {`${questionStyle.button} ${animationTrigger ? questionStyle.fadeInEx : ''}`} onClick= {() => handlePrevious()}>BACK</div>
           <div className={`${questionStyle.title} ${animationTrigger ? questionStyle.fadeInEx : ''}`}>{description}</div>          
           <div className= {`${questionStyle.index} ${animationTrigger ? questionStyle.fadeInEx : ''}`}>{slug}/{questionCount}</div>     
          </div>    
          <div className={`${questionStyle.optionBox} ${animationTrigger ? questionStyle.fadeInEx : ''}`}>
            {optionArray}
          </div>  
        </div>
      </div>      
    </>
  );
};


export default dynamic (() => Promise.resolve(Question), {ssr: false})
