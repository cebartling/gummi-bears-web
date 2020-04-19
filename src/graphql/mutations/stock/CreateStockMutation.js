import {gql} from '@apollo/client';

const CreateStockMutation = gql`
    mutation CreateStock($input: CreateStockMutationInput!) {
        createStock(input: $input) {
            clientMutationId,
            message,
            errors,
            userStock {
                id
                stock {
                    id
                }
            }
        }
    }
`;

export default CreateStockMutation;
