import Head from 'next/head';
import Router from 'next/router';
import { useRouter } from 'next/router';
//import styles from '../styles/Home.module.css';
import React from 'react';
import Button from '../custom_components/Button/Button'; // Import the Button component
import styles from '../styles/index.module.css';
import fetch_data from '../custom_functions/fetch_data';

const Index = () => {
  const router = useRouter();
  let k = fetch_data();

  const handleClick = () => {
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
    <><br />
    <div className={styles.index}>
      <h1 style={{ fontFamily: 'helvetica', display: 'flex', justifyContent: 'center', color: 'red' }}>Choose Your Test</h1> 
      <br />     
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `0 ${500/numberOfTests}px`}}> 
      {buttons}
      </div>    
    </div>
    </>
  );
};

export default Index;
