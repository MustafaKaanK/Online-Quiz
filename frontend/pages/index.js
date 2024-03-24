import Head from 'next/head';
import Router from 'next/router';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
//import styles from '../styles/Home.module.css';
import Button from '../custom_components/Button/Button'; // Import the Button component
import styles from '../styles/index.module.css';


const Index = () => {
  const router = useRouter();

  const [stateExample, setstateExample] = useState("korki");
  useEffect(() => {console.log(stateExample)},[stateExample]);

  const handleClick = () => {
    setstateExample("new korki")
    router.push('/test_page');
    
  };

  let Y = 3;

  const numberOfTests = 2; // Number of Tests you want to render
  

  //Array according to test count
  const buttons = [];
  for (let i = 0; i < numberOfTests; i++) {
    buttons.push(
      <Button key={i} onClick={handleClick} children={`${i}`}></Button>
    );
  }

  return (
    <>
    <div className={styles.index} >
      <h1 style={{ fontFamily: 'helvetica', display: 'flex', justifyContent: 'center', color: 'red' }}>Choose Your Test</h1> 
      <br />     
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `0 ${500/numberOfTests}px`}}> 
      {buttons}
      </div>
    </div>
    </>
  );
};

export default Index;
