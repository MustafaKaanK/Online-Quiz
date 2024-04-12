import Head from 'next/head';
import { useRouter } from 'next/router';
//import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';
import Question from '../custom_components/Question/Question';
import { useLocalStorage } from 'react-use';

const Test = () => {

const router = useRouter();  
/*const {query: {testID,
  answersList,
  testCount},} = router;

  const parsedArray = answersList ? JSON.parse(answersList) : [];  */






//---------------------------------------------

const [dataList] = useLocalStorage('myData', '');
const testID = dataList ? dataList.dataList[0]: ''; 
const answersList = dataList ? dataList.dataList[1]: ''; 
const testCount = dataList ? dataList.dataList[2]: ''; 

console.log(answersList);
// fragment arasında normalde bu var  <Question testID = {testID} answersList = {parsedArray} testCount={testCount}/> 




  return (
    <>
    <Question testID = {testID} answersList = {answersList} testCount={testCount}/> 
    </>
  );
};

export default Test;
