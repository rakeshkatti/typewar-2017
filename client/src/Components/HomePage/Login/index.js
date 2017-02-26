/**
 * Created by rakesh.katti on 22/02/17.
 */
import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseConfig from '../../../utils/firebase_config';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.googleAuth = this.googleAuth.bind(this);
    }

    googleAuth() {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        provider.addScope('https://www.googleapis.com/auth/userinfo.email');
        provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

        provider.setCustomParameters({
            'login_hint': 'user@example.com'
        });

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

        //ref.authWithOAuthPopup("google", function (error, authData) {
        //    if (error) {
        //        console.log("Login Failed!", error);
        //    } else {
        //        console.log("Authenticated successfully with payload:", authData);
        //        //self.login(authData);
        //        //store.dispatch({type: "ADD_USER", username: authData.uid});
        //        //localStorage.setItem("username", authData.uid);
        //        //renderContainer();
        //    }
        //}, {
        //    scope: "email"
        //});
    }

    render() {
        return (
            <div>
                <button onClick={this.googleAuth}>
                    Login with Google
                </button>
            </div>
        )
    }
}

Login.contextTypes = {
    store: React.PropTypes.object
};