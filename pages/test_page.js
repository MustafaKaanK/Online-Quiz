import Head from 'next/head';
import Router from 'next/router';
//import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';
import Button from '../custom_components/Button/Button'; // Import the Button component
import styles from '../styles/index.module.css';
import Fetchdata from '../custom_functions/Fetchdata';
import Question from '../custom_components/Question/Question';
import Article from '../custom_components/Question/Article';

const Test = () => {

const question = "What is your name?";
const numberOfTests = 4;
const answer = "OPTION"

const buttons = [];
for (let i = 0; i < numberOfTests; i++) {
  buttons.push(
    <button style={{height: "18vh", width: "25vw", margin: "5px", border: "3px solid black", borderRadius: "5px", backgroundColor: "blue", color: "red" }}>{answer}</button>
  );
}

  return (
    <>
      <Question/>
      <Article/>
    </>
  );
};

export default Test;
