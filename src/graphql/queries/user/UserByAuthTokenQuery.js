import {gql} from '@apollo/client';

const UserByAuthTokenQuery = gql`
    query GetUserByAuthToken($authToken: String!) {
        userByAuthToken(authToken: $authToken) {
            id
            firstName
            lastName
            authToken
            userStocks {
                id
                stock {
                    id
                    name
                    symbol
                    latestDailyTimeSeriesEvent {
                        id
                        eventDate
                        openPrice
                        closePrice
                        highPrice
                        lowPrice
                        volume
                    }
                }
            }
        }
    }

`;

export default UserByAuthTokenQuery;
