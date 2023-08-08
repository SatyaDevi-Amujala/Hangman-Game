import React from 'react';
import { useLocation } from 'react-router-dom';

import Animals from './Animals.js';
import Things from './Things.js';
import Birds from './Birds.js';
import Fruits from './Fruits.js';
import Colours from './Colours.js';
import Vehicles from './Vehicles.js';
import Sports from './Sports.js';
import Relatives from './Relatives.js';
import BodyParts from './BodyParts.js';

const Level = () => {
    let {search}=useLocation();
    let params=new URLSearchParams(search);
    let c=params.get('cat')
    let l=params.get('level')
    let count=1;
  return (
    <div>
      <div>
  <center><h2 style={{color:"white",padding:"20px"}}>Category : {c}</h2>
        <h2 style={{color:"white",padding:"20px",paddingTop:"0px",paddingBottom:"0px"}}>Level    : {l}</h2></center>
        </div>
        <div>
        {c==="Animals"?<Animals C={c}  L={l}/>:''}
        {c==="Birds"?<Birds C={c} L={l}/>:''}
        {c==="Things"?<Things C={c} L={l}/>:''}
        {c==="Vehicles"?<Vehicles C={c} L={l}/>:''}
        {c==="BodyParts"?<BodyParts C={c} L={l}/>:''}
        {c==="Fruits"?<Fruits C={c} L={l}/>:''}
        {c==="Colours"?<Colours C={c} L={l}/>:''}
        {c==="Relatives"?<Relatives C={c} L={l}/>:''}
        {c==="Sports"?<Sports C={c} L={l}/>:''}
        </div>
    </div>
  );
}

export default Level;
