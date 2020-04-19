import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import { setContext } from "apollo-link-context";
import {getToken} from "../utils/LocalStorageAccess";

const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = getToken();
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
    link: authLink.concat(httpLink)
});

export default client;
