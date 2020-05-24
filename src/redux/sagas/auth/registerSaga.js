import {takeEvery} from 'redux-saga/effects';
import {REGISTER} from "../../actions/auth/register";
import * as firebase from "firebase/app";
import "firebase/auth";


// function* createUserInDatabase(auth0User) {
//     const result = yield apolloClient.mutate({
//         mutation: CreateUserMutation,
//         variables: {
//             input: {
//                 clientMutationId: uuidv4(),
//                 input: {
//                     firstName: auth0User['given_name'],
//                     lastName: auth0User['family_name'],
//                     username: auth0User['email']
//                 }
//             }
//         }
//     });
//     return result.data.createUser;
// }

function* createUserInFirebase(action) {
    const userCredential = yield firebase.auth().createUserWithEmailAndPassword(action.payload.email, action.payload.password);
        // .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
    return userCredential;
}

function* registerAsync(action) {
    // yield put(createActionSetToken(process.env.REACT_APP_AUTH_TOKEN));
    // yield put(createActionSetAuthenticated(true));
    // setToken(process.env.REACT_APP_AUTH_TOKEN);
    // const currentUser = yield getUser();
    // if (currentUser) {
    //     yield put(createActionSetUserId(currentUser.id));
    // }
}

export function* watchRegisterAsync() {
    yield takeEvery(REGISTER, registerAsync);
}
