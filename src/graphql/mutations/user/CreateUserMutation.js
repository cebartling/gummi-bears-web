import {gql} from '@apollo/client';

const CreateUserMutation = gql`
    mutation CreateUser($input: CreateUserMutationInput!) {
        createUser(input: $input) {
            clientMutationId,
            message,
            errors,
            user {
                id
            }
        }
    }
`;

export default CreateUserMutation;
