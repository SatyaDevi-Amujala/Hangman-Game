import React from 'react';
import Keyboard from './Keyboard'

const BodyParts = (props) => {
    let j=null;
   
    
        if("Easy"==props.L){
            j=["HEAD",'HANDS',"NECK","LEGS","FOOT"];}
        else if("Medium"==props.L){
            j=["NOSE",'EYE',"KNEE","FINGURE","MOUTH"];}
        else if("Difficult"==props.L){
            j=["TONGUE",'ELBOW',"FOREHEAD","SHOULDER","THROAT"];}
           
  return (
    <Keyboard cat={props.C} word={j}/>

  );
}

export default BodyParts;
