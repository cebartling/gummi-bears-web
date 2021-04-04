export const SIGN_IN = 'SIGN_IN';

export const createActionSignIn = (displayName, email, photoURL, uid, phoneNumber, idToken) => {
    return {
        type: SIGN_IN,
        payload: {displayName, email, photoURL, uid, phoneNumber, idToken}
    };
};

