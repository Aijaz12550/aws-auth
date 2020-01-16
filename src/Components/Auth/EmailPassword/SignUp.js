import React, {useState, useEffect} from 'react'
import Amplify, {Auth} from 'aws-amplify'
import { awsConfig } from '../../../Config/credential'

Amplify.configure(awsConfig)


export const SignUp = (props) => {
    
    const [name , setName] = useState(null)

    const Register = async () =>{
        const username = 'a@gmail.com'
     await Auth.signUp({
        username,
        email:'a@gmail.com',
        password :'12434443',
        attributes:{
            email:'a@gmail.com'
        }
    }).then( response => {
        console.log(  'success', response )
    }).catch( error => {
        console.log( 'error', error )
    })
    
    }
      
    useEffect(()=> {
        console.log('>>',window.FB)
    })
    
    return (
        <div style={{minHeight:"300px",display:'flex',flexDirection:'column',justifyContent:'space-around'}} >
            
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:100,}}>
                <input type='text' style={{minHeight:'30px',borderRadius:'10px',outline:'none',boxShadow:'1px 0px 1px 1px lightgray'}} placeholder='Email' />
                <input type='password' style={{minHeight:'30px',borderRadius:'10px',outline:'none'}} placeholder='Password' />
               
               
            </div>

            <button onClick={Register}>Done</button>
        </div>
    )
}