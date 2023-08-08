import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './index.css';

const Game = () => {
 
  let {search}=useLocation();
  let params=new URLSearchParams(search);
  let category=params.get('name');
  
 
  return (
    <div>
      <center>
      <div className="box">
      <h2>{category}</h2>
      <Link to={`/Level?level=${"Easy"}&cat=${category}`} className='button' >Easy</Link>
      <Link to={`/Level?level=${"Medium"}&cat=${category}`} className='button' >Midium</Link>
      <Link to={`/Level?level=${"Difficult"}&cat=${category}`} className='button' >Difficult</Link>
      <p></p>
      <p></p>
      <p>OR</p>
      <div>
      <Link to={'/'} className='button' >Back</Link></div>
      </div>
      </center>
    </div>
  );
}

export default Game;
