import React from 'react';
import Keyboard from './Keyboard';
const Animals = (props) => {
        

        let j=null;
      
    
        if("Easy"==props.L){
                //j=["",'',"","",""];}
                j=["COW",'PIG',"FOX","CAT","DOG"];}
               else if("Medium"==props.L){
                j=["HORSE",'RABBIT',"SHEEP","MONKEY","TIGER"];}
                else if("Difficult"==props.L){
                        j=["CHIMPANZEE",'GIRAFFE',"KANGAROO","ELEPHANT","HIPPOPOTAMUS"];}
                      
  return (

    <Keyboard cat={props.C} word={j}/>
      

  );}


export default Animals;
