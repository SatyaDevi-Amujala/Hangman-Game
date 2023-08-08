import React from 'react';

import Keyboard from './Keyboard'

const Sports = (props) => {
    let j=null;

    
        if("Easy"==props.L){
            j=["GOLF",'FOOTBALL',"CHESS","CRICKET","HOCKEY"];}
            
        else if("Medium"==props.L){
            j=["BOXING",'VOLLEYBALL',"BASKETBALL","KARATE","BADMINTON"];}
        else if("Difficult"==props.L){
            j=["KABADDI",'SURFING',"JAVALINTHROW","SHOOTING","WRESTLING"];}
           
  return (
    <Keyboard cat={props.C} word={j}/>
  );
}

export default Sports;
