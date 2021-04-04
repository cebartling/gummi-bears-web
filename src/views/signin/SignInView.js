import React from 'react';
import {StyledFirebaseAuth} from 'react-firebaseui';
import firebase from 'firebase';
import 'firebase/auth';
import {useDispatch} from 'react-redux';
import {createActionSignIn} from '../../redux/actions';
import {useHistory} from 'react-router';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/dashboard',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true
    },
  ]
};

function SignInView() {
  const dispatch = useDispatch();
  const history = useHistory();


  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const {displayName, email, photoURL, uid, phoneNumber} = user;
      user.getIdToken().then(function (idToken) {
        dispatch(createActionSignIn(displayName, email, photoURL, uid, phoneNumber, idToken));
        history.push('/dashboard');
      });
    }
  }, function (error) {
    console.error(error);
  });

  return (
    <div>
      <h1>Sign in to Gummi Bears</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    </div>
  );
}

export default SignInView;
