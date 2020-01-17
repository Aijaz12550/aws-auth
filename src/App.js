import React, {useState, useEffect} from 'react';
import './App.css';
import { SignUp } from './Components/Auth/EmailPassword/SignUp'
import { Social } from './Components/Auth/Social/Facebook'
import { Auth } from 'aws-amplify'

function App() {
  const [style, setStyle] = useState('popup')

   useEffect (()=>{

    async function sabar(){

      await Auth.currentSession()
      .then( data => console.log('data',data))
      .catch( error => console.log( 'error', error))
    }

    sabar()

    })
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
