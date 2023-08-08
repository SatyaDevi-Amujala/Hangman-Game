import React from 'react';

import Keyboard from './Keyboard'

const Fruits = (props) => {
    let j=null;
  
  
        if("Easy"==props.L){
            j=["APPLE",'BANANA',"GRAPES","MANGO","CHERRY"];}
           
        else if("Medium"==props.L){
            j=["LEMON",'PINEAPPLE',"PAPAYA","ORANGE","WATERMELON"];}
            
        else if("Difficult"==props.L){
            j=["JACKFRUIT",'POMEGRANATE',"AVACADO","STRABERRY","TAMARIND"];}

  return (
    <Keyboard cat={props.C} word={j}/>
  );
}

export default Fruits;
