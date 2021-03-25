import React from 'react';
import {StyledFirebaseAuth} from 'react-firebaseui';
import firebase from 'firebase';
import 'firebase/auth';
import {useDispatch} from "react-redux";
import {createActionSignIn, createActionSignOut} from "../../redux/actions";

function FrontDoorView() {
  const dispatch = useDispatch();

  const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/welcome',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: false
      },
    ]
  };

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const {displayName, email, photoURL, uid, phoneNumber} = user;
      user.getIdToken().then(function (accessToken) {
        dispatch(createActionSignIn(displayName, email, photoURL, uid, phoneNumber, accessToken));
        console.log('User signed in');
      });
    } else {
      dispatch(createActionSignOut());
      console.log('User signed out')
    }
  }, function (error) {
    console.error(error);
  });

  return (
    <div>
      <h1>Front Door</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    </div>
  );
}

export default FrontDoorView;
