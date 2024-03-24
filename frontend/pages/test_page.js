import Head from 'next/head';
import Router from 'next/router';
//import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';
import Question from '../custom_components/Question/Question';

const Test = () => {

const question = "What is your name?";
const numberOfTests = 4;
const answer = "This is an option, This is an option, This is an option, This is an option, This is an option, This is an option, This is an option,"
  

const buttons = [];
for (let i = 0; i < numberOfTests; i++) {
  buttons.push(
    <button style={{height: "18vh", width: "25vw", margin: "5px", border: "3px solid black", borderRadius: "5px", backgroundColor: "blue", color: "red" }}>{answer}</button>
  );
}

  return (
    <>
    
    <Question/>
    
    </>
  );
};

export default Test;
