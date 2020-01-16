import React, {useState} from 'react'
import { GoogleLogin } from './google'
import { SignInWithFacebook } from './fb '


export const Social = (props) => {

    return (
        <div style={{minHeight:"300px",display:'flex',flexDirection:'column',justifyContent:'space-around'}} >
            
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:100}}>
                <SignInWithFacebook/>
                <GoogleLogin/>
            </div>

        </div>
    )
}