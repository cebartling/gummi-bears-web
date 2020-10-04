import {gql} from '@apollo/client';

const UserStocksByUserIdQuery = gql`
    query UserById($id: ID!) {
        userById(id: $id) {
            userStocks {
                id
                companyName
                stockSymbol
            }
        }
    }
`;

export default UserStocksByUserIdQuery;
