import {gql} from '@apollo/client';

const UserByAuthTokenQuery = gql`
    query GetUserByAuthToken($authToken: String!) {
        userByAuthToken(authToken: $authToken) {
            id
            firstName
            lastName
            authToken
            stocks {
                id
                stock {
                    id
                    name
                    symbol
                }
            }
        }
    }

`;

export default UserByAuthTokenQuery;
