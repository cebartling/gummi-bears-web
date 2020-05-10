import {gql} from '@apollo/client';

const UserStockTransactionsQuery = gql`
    query UserById($id: ID!) {
        userById(id: $id) {
            userStocks {
                id
                companyName
                stockSymbol
                userStockTransactions {
                    id
                    priceInCents
                    sharesCount
                    totalAmountInCents
                    transactionTimestamp
                    transactionType
                }
            }
        }
    }

`;

export default UserStockTransactionsQuery;
