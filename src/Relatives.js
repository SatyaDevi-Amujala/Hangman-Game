import React from 'react';

import Keyboard from './Keyboard'

const Relatives = (props) => {
    let j=null;
        if("Easy"==props.L){
            j=["MOTHER",'BROTHER',"SISTER","FATHER","SON"];}
            
        else if("Medium"==props.L){
            j=["UNCLE",'NIECE',"COUSIN","NEPHEW","DAUGHTER"];}
        else if("Difficult"==props.L){
            j=["GRANDFATHER",'GRANDCHILD',"SONINLAW","GRANDMOTHER","SISTERINLAW"];}
           
  return (
    <Keyboard cat={props.C} word={j}/>
  );
}

export default Relatives;
