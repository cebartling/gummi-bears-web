import {gql} from '@apollo/client';

const UserByIdQuery = gql`
    query UserById($id: ID!) {
        userById(id: $id) {
            id
            firstName
            lastName
            username
        }
    }
`;

export default UserByIdQuery;
