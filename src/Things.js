import React from 'react';

import Keyboard from './Keyboard'

const Things = (props) => {
    let j=null;
   
        if("Easy"===props.L){
            j=["BOOK",'GLASS',"DOOR","TABLE","FLAG"];}
        else if("Medium"==props.L){
            j=["TOWEL",'LAMP',"KETTLE","HAMMER","PENCIL"];}
        else if("Difficult"==props.L){
            j=["CALCULATOR",'SCISSORS',"TOOTHBRUSH","HEADPHONES","IRONBOX"];}
         
  return (
    <Keyboard cat={props.C} word={j}/>
  );
}

export default Things;
