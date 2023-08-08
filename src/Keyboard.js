import React from 'react';
import {useState,useRef} from 'react';
import {useNavigate} from 'react-router';
import './index.css';
import imag1 from './1.png';
import imag2 from './2.png';
import imag3 from './3.png';
import imag4 from './4.png';
import imag5 from './5.png';
import imag6 from './6.png';
import imag7 from './7.png';
import { Link } from 'react-router-dom';
let Word='';




const Keyboard = (props) => {
  const navigate=useNavigate();
  const ind=useRef(0);
 const [click,setclick]=useState('');
  const [guess,setguess]=useState('');
  const [count,setcount]=useState([]);
  const [Words,setWords]=useState('s');


  if(ind.current==0){
  Word=props.word[ind.current];}
  let wl=Word.length;
  let o=0
 
 
  if(!(guess.includes(click)) && !(Words=="next")){
    setguess(guess+click);}
   
   if(!(Word.includes(click)) && !(count.includes(click))){
    count.push(click);
  }
  
  for(let x in Word){
      if((guess.includes(Word.charAt(x)))){
        o=o+1;
      }
    }
  
    if(Words=="next"){
      setWords("s");
      setguess(''); 
      setcount([]);
      setclick('');
    }
 
 
  const keys=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  return (
    <div>
        <div style={{width:"30%",float:"left"}}>
            <div>
             {count.length==0?<img className="image" src={imag1} 
             height="420" width="320" alt="hangman"/>:''}
             {count.length==1?<img className="image"src={imag2} 
             height="420" width="320" alt="hangman"/>:''}
             {count.length==2?<img className="image"src={imag3} 
             height="420" width="320" alt="hangman"/>:''}
             {count.length==3?<img className="image"src={imag4} 
             height="420" width="320" alt="hangman"/>:''}
             {count.length==4?<img className="image"src={imag5} 
             height="420" width="320" alt="hangman"/>:''}
             {count.length==5?<img className="image"src={imag6} 
             height="420" width="320" alt="hangman"/>:''}
             {count.length==6?<img className="image"src={imag7} 
             height="420" width="320" alt="hangman"/>:''}
            </div></div>
      {o!=wl || Words=="next"?
       <div>
        <div style={{marginLeft:"50%",marginTop:"50px"}}>
            <div >Chances Left : {6-count.length}</div>
            <div style={{display:"flex",color:"white",gap:"20px",fontSize:"30px",marginBottom:"10px"}}>
            Word: {Word.split("").map((letter,index)=>(
            <span style={{borderBottom:".1em solid white"}} key={index}>
             <span
             style={{
                 visibility:guess.includes(letter)?"visible":"hidden"
             }}
             >{letter}</span></span>
              ))}</div></div>
              {count.length==6?
          <div style={{marginTop:"20px",marginLeft:"40%",width:"40%",height:"30%",backgroundColor:"white",color:'rgb(13,31,99)'}}>
           <center style={{padding:"50px"}}> <h2>Incorrect</h2>
           <button onClick={()=>{window.location.reload(false)}}className="button">Try again</button></center>
          </div>:<div id="here">
          <div style={{alignSelf:"stretch",padding:"20px",marginLeft:"35%"}}>
               <div style={{
                  display:"grid",
                  gridTemplateColumns:"repeat(auto-fit,minmax(75px,1fr))",
                   gap:".5rem"
              }}>
                 {keys.map(key=>{
                return(
                  <button onClick={()=>setclick(key)}className="btn" key={key}>
                  {key}
                   </button>)
                    })}</div>
                  </div>  </div>}</div>:

               <div style={{marginTop:"20px",marginLeft:"40%",width:"40%",height:"30%",backgroundColor:"white",color:'rgb(13,31,99)'}}>
           <center style={{padding:"50px"}}> <h2>Correct</h2>
          

           <Link to={`/Game?name=${props.cat}`} className='button' >Back</Link>
           <button onClick={()=>{if(ind.current==4){navigate('/HM',{state:{ceta :props.cat}});}else{setWords("next");
     ind.current=ind.current+1; Word=props.word[ind.current]}}}className="button">Next</button>
          </center>
          </div>}
                  
    </div>
    
  
  );
}

export default Keyboard;



        
             
    
  

