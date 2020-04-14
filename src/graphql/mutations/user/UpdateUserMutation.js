import {gql} from '@apollo/client';

const UpdateUserMutation = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
            clientMutationId,
            message,
            errors,
            user {
                id
            }
        }
    }
`;

export default UpdateUserMutation;
