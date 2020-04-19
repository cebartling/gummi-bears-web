import React from 'react';
import {ApolloProvider} from "@apollo/client";
import client from "./graphql/apolloClient";
import {Provider} from "react-redux";
import history from "./history";
import {ConnectedRouter} from "connected-react-router";

const ProviderWrapper = ({children, store}) => (
    <ApolloProvider client={client}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {/*<React.StrictMode>*/}
                {children}
                {/*</React.StrictMode>*/}
            </ConnectedRouter>
        </Provider>
    </ApolloProvider>
);

export default ProviderWrapper;
