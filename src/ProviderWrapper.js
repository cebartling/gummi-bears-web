import React from 'react';
import history from "./utils/history";
import {Auth0Provider} from "./react-auth0-spa";
import {ApolloProvider} from "@apollo/client";
import client from "./graphql/apolloClient";
import {Provider} from "react-redux";

// A function that routes the user to the right place after login
const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

const ProviderWrapper = ({children, store}) => (
    <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}>
        <ApolloProvider client={client}>
            <Provider store={store}>
                {/*<React.StrictMode>*/}
                {children}
                {/*</React.StrictMode>*/}
            </Provider>
        </ApolloProvider>
    </Auth0Provider>
);

export default ProviderWrapper;
