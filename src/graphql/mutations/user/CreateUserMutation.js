import {gql} from '@apollo/client';

const CreateUserMutation = gql`
    mutation CreateUser($createUserInput: CreateUserInput!) {
        createUser(input: $createUserInput) {
            id
        }
    }
`;

export default CreateUserMutation;
