import React from 'react';
import {Link} from 'react-router-dom';


import image from './7.png';
import './index.css';

const Home = () => {

    const sat={
    color:"white",
    padding:"20px",
    marginLeft:"120px",
    marginTop:"80px",


  };
  return (
    <div>
    

<div style={{width:"50%",height:"100%",float:"right"}}><h2 style={{marginTop:"70px",color:"white",padding:"20px"}}>Select Category</h2>
<div style={{padding:"20px",width:"40%",float:"right"}}><Link to={'/Game?name=Animals'} className='button' >Animals</Link></div>
<div style={{padding:"20px",width:"30%",float:"left"}}><Link to={'/Game?name=Birds'} className='button'>Birds</Link></div>
<div style={{padding:"20px",width:"30%",float:"left"}}><Link to={'/Game?name=Colours' }className='button'>Colours</Link></div>
<div style={{padding:"20px",width:"30%",float:"left"}}><Link to={'/Game?name=BodyParts'} className='button'>Body Parts</Link></div>
<div style={{padding:"20px",width:"30%",float:"left"}}><Link to={'/Game?name=Things'}className='button'>Things</Link></div>
<div style={{padding:"20px",width:"30%",float:"left"}}><Link to={'/Game?name=Fruits'} className='button'>Fruits</Link></div>
<div style={{padding:"20px",width:"30%",float:"left"}}><Link to={'/Game?name=Relatives'} className='button'>Relatives</Link></div>
<div style={{padding:"20px",width:"40%",float:"right"}}><Link to={'/Game?name=Sports'} className='button'>Sports</Link></div>
<div style={{padding:"20px",width:"30%",float:"right"}}><Link to={'/Game?name=Vehicles'} className='button'>Vehicles</Link></div></div>

     
      <div style={{width:"50%",height:"100%",float:"left"}}>
      <h1 style={sat}>Hang Man</h1> 
        <img style={{marginLeft:"120px",borderRadius:"18px" }}src={image} height="420" width="320" alt="hangman"/></div>
     
     </div>
  );
}

    


export default Home;
