import React from 'react';
import Keyboard from './Keyboard'
const Vehicles = (props) => {
    let j=null;

 
        if("Easy"==props.L){
            j=["CAR",'BUS',"VAN","CYCLE","TRAIN"];}
           
        else if("Medium"==props.L){
            j=["JEEP",'CRANE',"TRACTOR","TAXI","SCOOTER"];}
        else if("Difficult"==props.L){
            j=["AMBULANCE",'HELICOPTER',"AEROPLANE","RICKSHAW","BULLOCKCART"];}
           
  return (
    <Keyboard cat={props.C} word={j}/>
     
   
  );
}

export default Vehicles;
