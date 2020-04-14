import {gql} from '@apollo/client';

const UserByUsernameQuery = gql`
    query UserByUsername($username: String!) {
        userByUsername(username: $username) {
            id
            firstName
            lastName
            username
        }
    }
`;

export default UserByUsernameQuery;
