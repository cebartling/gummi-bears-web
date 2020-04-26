import {gql} from '@apollo/client';

const UserByUsernameQuery = gql`
    query UserByUsername($username: String!) {
        userByUsername(username: $username) {
            id
            firstName
            lastName
            username
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

export default UserByUsernameQuery;
