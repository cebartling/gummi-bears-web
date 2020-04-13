import {gql} from '@apollo/client';

const UserByUsernameQuery = gql`
    query UserByUsername($username: String!) {
        userByUsername(username: $username) {
            id
            givenName
            familyName
            username
        }
    }
`;

export default UserByUsernameQuery;
