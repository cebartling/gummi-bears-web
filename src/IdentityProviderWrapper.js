import React from 'react';
import history from "./utils/history";
import {Auth0Provider} from "./react-auth0-spa";

// A function that routes the user to the right place after login
const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

const IdentityProviderWrapper = ({children}) => (
    <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}>
        {children}
    </Auth0Provider>
);

export default IdentityProviderWrapper;
