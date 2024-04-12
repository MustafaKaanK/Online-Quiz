import React from 'react';
import styles from '../Form/Button.module.css'; // Import CSS module
import imgStyles from '../Images/img.module.css'; // Import CSS module for image styles

function Button({ onClick, children, X, Y }){
  
  return (
    <div>
      <button className={styles.customButton} style={{transform: `translate(${X}px, ${Y}px)` }} onClick={onClick}>
        {/*children*/}        
      <img src={"/pic.jpeg"} className={imgStyles.img} alt="Image" /> 
      </button>
    </div>
  );
};

export default Button;
