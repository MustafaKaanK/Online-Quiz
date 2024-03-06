import Head from 'next/head';
import Router from 'next/router';
//import styles from '../styles/Home.module.css';
import React from 'react';
import Button from '../custom_components/Button/Button'; // Import the Button component
import styles from '../styles/index.module.css';

const Test = () => {
  
  



  return (
    <>
      <div style={{ display: 'flex'}}>
      <div className={styles.index} style={{width: "50%", height: "50%", opacity: "0.51"}} >
        <h1>asdjkasp</h1>
        </div>
        <div className={styles.index} style={{width: "50%", height: "50%", alignContent: "center"}}>
        <h1>asdjkasp</h1>
        </div>
        </div>
    </>
  );
};

export default Test;
