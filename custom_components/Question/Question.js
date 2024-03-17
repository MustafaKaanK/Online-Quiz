import customQuestion from './Question.module.css';
import { useRouter } from 'next/router';
const Question = (question, options) =>{

  const question1 = "IF YOU COULD ONLY EAT ONE TYPE OF CUISINE FOR THE REST OF YOUR LIFE, WHAT WOULD IT BE?";
  const numberOfTests = 4;
  const answer = "This is an option, This is an option, This is an option, This is an option, This is an option, This is an option, This is an option,"
  
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
    
  };
  

  const buttons = [];
for (let i = 0; i < numberOfTests; i++) {
  buttons.push(
    <div onClick = {handleClick} className = {customQuestion.customQuestion}><p style={{fontSize: "25px"}}>{answer}</p></div>
  );
}
//style={{ padding: "10px 8px",overflow: "unset",wordBreak: "break-all",border: "1px solid black",overflow: "hidden", flexWrap: "wrap", display: "flex", height: "25vh", width: "27vw", margin: "5px", borderRadius: "7px", backgroundColor: "blue", color: "red", alignItems: "flex-start", boxSizing: "border-box"}}

  return (
    <>
      <div style={{backgroundImage: "url('./681763.jpg')", backgroundClip:"border-box",backgroundSize: "cover",display: "flex",flexWrap: "wrap",justifyContent: "center", alignContent: "center", height: "98vh", width: "98vw", borderRadius: "7px" }}>
        <div style={{ backdropFilter: 'blur(3px)',display: 'flex',flexWrap: "wrap" ,flexDirection: "column", backgroundColor: "rgba(232, 236, 232, 0.274)", width: "70vw", height: "70vh", alignItems: "center", justifyContent: "space-evenly", borderRadius: "7px", boxShadow: "2px 2px 10px 1px black"}}>
          <div style={{wordBreak: "break-all",display: "flex",flexWrap: "wrap",fontSize: "35px", height: "6vh", width: "55vw", justifyContent: "center", alignContent: "center", boxSizing: "border-box", marginBottom: "5px", textAlign: "center"}}>
             <div>{question1}</div>
                         
          </div>
          <div style={{display: 'flex',flexWrap: "wrap" ,flexDirection: "row", flexShrink: "0", justifyContent: "space-evenly", alignContent: "space-around",  height: "55vh", boxSizing: "border-box", position: "relative", top: "0px"}}>
             {buttons} 
          </div>          
        </div>
      </div>      
    </>
  );
};

export default Question
