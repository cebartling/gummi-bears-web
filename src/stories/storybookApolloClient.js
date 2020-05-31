import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "apollo-link-context";

const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL,
});

const storybookAuthLink = setContext((_, { headers }) => {
    // get the authentication token from environment variable
    const token = process.env.REACT_APP_AUTH_TOKEN;
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            Authorization: token ? `Token ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: storybookAuthLink.concat(httpLink)
});

export default client;
