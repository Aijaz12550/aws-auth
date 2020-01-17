
import React, { Component } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { awsConfig } from '../../../Config/credential'

Amplify.configure(awsConfig)


// To federated sign in from Google
 export class GoogleLogin extends Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
    }

    componentDidMount() {
        const ga = window.gapi && window.gapi.auth2 ? 
            window.gapi.auth2.getAuthInstance() : 
            null;
        if (!ga) this.createScript();
    }

    signIn() {
        const ga = window.gapi.auth2.getAuthInstance();
        ga.signIn().then(
            googleUser => {
                this.getAWSCredentials(googleUser);
            },
            error => {
                console.log(error);
            }
        );
    }

    async getAWSCredentials(googleUser) {
    
        const { id_token, expires_at } = googleUser.getAuthResponse();
        const profile = googleUser.getBasicProfile();
        let user = {
            email: profile.getEmail(),
            name: profile.getName()
        };
        console.log('>>>',googleUser)
         await Auth.federatedSignIn(
            'google',
            { token: id_token, expires_at },
            user
        ).then( res=>{
             console.log('success',res)
        }).catch( error => {
            console.log(' error', error)
        })
       
    }

    createScript() {
        // load the Google SDK
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/platform.js';
        script.async = true;
        script.onload = this.initGapi;
        document.body.appendChild(script);
    }

    initGapi() {
        // init the Google SDK client
        const g = window.gapi;
        g.load('auth2', function() {
            g.auth2.init({
                client_id: '215485620819-r3ps1inqudcu9u0dvpeu6lrrfktd7dma.apps.googleusercontent.com',
                // authorized scopes
                scope: 'profile email openid'
            });
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.signIn}>Google</button>
            </div>
        );
    }
}