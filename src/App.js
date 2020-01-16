import React, {useState} from 'react';
import './App.css';
import { SignUp } from './Components/Auth/EmailPassword/SignUp'
import { Social } from './Components/Auth/Social/Facebook'

function App() {
  const [style, setStyle] = useState('popup')
  return (
    <div className="App">

      <div className = 'container' >
        <a href='#popup' onClick={()=>setStyle('popup-show')} className='button'>
         Login
        </a>

      <div  className={style}>

        {/* ---------------------------------------------------- */}
        <div className='popup-inner'>
          <div> 
            <h2> AWS-Auth</h2>
          </div>
          <div className='Body_main'>
              <SignUp/>


              <div style={{height:'100%',borderLeft:'1px solid gray'}}></div>


              <Social/>

          </div>

          


          <button onClick={()=>setStyle('popup')} className='button'>close</button>
        </div>

      </div>

      </div>
     
    </div>
  );
}

export default App;
