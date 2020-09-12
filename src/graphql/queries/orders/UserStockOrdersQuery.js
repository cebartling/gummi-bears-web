import {gql} from '@apollo/client';

const UserStockOrdersQuery = gql`
    query OrdersByUser($id: ID!) {
        userById(id: $id) {
            userStocks {
                id
                companyName
                stockSymbol
                orders {
                    id
                    priceInCents
                    sharesCount
                    totalAmountInCents
                    orderTimestamp
                    transactionType
                }
            }
        }
    }

`;

export default UserStockOrdersQuery;
