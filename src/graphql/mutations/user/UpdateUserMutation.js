import {gql} from '@apollo/client';

const UpdateUserMutation = gql`
    mutation UpdateUser($updateUserInput: UpdateUserInput!) {
        updateUser(input: $updateUserInput) {
            id
        }
    }
`;

export default UpdateUserMutation;
