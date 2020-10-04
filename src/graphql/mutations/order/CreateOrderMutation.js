import {gql} from '@apollo/client';

const CreateOrderMutation = gql`
    mutation CreateOrder($input: CreateOrderMutationInput!) {
        createOrder(input: $input) {
            clientMutationId
            message
            errors
            order {
                id
            }
        }
    }
`;

export default CreateOrderMutation;
