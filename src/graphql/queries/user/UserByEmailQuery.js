import {gql} from '@apollo/client';

const UserByEmailQuery = gql`
    query UserByEmail($email: String!) {
        userByEmail(email: $email) {
            id
            givenName
            familyName
            createdAt
            updatedAt
            email
        }
    }
`;

export default UserByEmailQuery;
