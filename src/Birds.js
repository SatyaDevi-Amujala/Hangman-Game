import React from 'react';
import Keyboard from './Keyboard'
const Birds = (props) => {
  let j=null;


        if("Easy"==props.L){
          j=["HEN",'DUCK',"CROW","PARROT","OWL"];}
            
        else if("Medium"==props.L){
          j=["EAGLE",'PEACOCK',"SWAN","SPARROW","PIGEON"];}
           
        else if("Difficult"==props.L){
          j=["KINGFISHER",'NIGHTINGLE',"HUMMINGBIRD","OSTRICH","FLAMINGO"];}
           
  return (
   
      <Keyboard cat={props.C} word={j}/>
    
  );
}

export default Birds;
