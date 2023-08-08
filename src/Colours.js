import React from 'react';

import Keyboard from './Keyboard'


const Colours = (props) => {
  let j=null;
  let cat=props.C;
        if("Easy"==props.L){
           j=["RED",'BLUE',"GREEN","BLACK","PINK"];}
        else if("Medium"==props.L){
           j=["WHITE",'YELLOW',"PURPLE","BROWN","VIOLET"];}
        else if("Difficult"==props.L){
           j=["ORANGE",'MAROON',"CYAN","INDIGO","GREY"];}
               
  return (
    <Keyboard cat={cat} word={j}/>
  );
}

export default Colours;
