import {gql} from '@apollo/client';

const UserByIdQuery = gql`
    query UserById($id: ID!) {
        userById(id: $id) {
            id
            firstName
            lastName
            username
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

export default UserByIdQuery;
