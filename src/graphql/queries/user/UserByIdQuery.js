import {gql} from '@apollo/client';

const UserByIdQuery = gql`
    query UserById($id: ID!) {
        userById(id: $id) {
            id
            givenName
            familyName
            createdAt
            updatedAt
            email
        }
    }
`;

export default UserByIdQuery;
