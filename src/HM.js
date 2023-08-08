import React from 'react';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';



const HM = () => { 
  let location=useLocation();    
  return (
    <div>
    <center>
    <div style={{padding:"20px", marginTop:'10%',width:"30%",height:"200px",backgroundColor:"white",borderRadius:"16px",color:'rgb(13,31,99)',}}>
      
      <h2 >Level Comleted</h2>
      <Link to={`/Game?name=${location.state.ceta}`} className='button' >Back</Link>
      </div>
      </center>
     
    </div>
  );
}

export default HM;














