import React from 'react';
import {ApolloProvider} from "@apollo/client";
import client from "./graphql/apolloClient";
import {Provider} from "react-redux";

const ProviderWrapper = ({children, store}) => (
    <ApolloProvider client={client}>
        <Provider store={store}>
            {/*<React.StrictMode>*/}
            {children}
            {/*</React.StrictMode>*/}
        </Provider>
    </ApolloProvider>
);

export default ProviderWrapper;
