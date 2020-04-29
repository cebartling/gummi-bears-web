import {gql} from '@apollo/client';

const UserStockByIdQuery = gql`
    query UserStockById($id: ID!) {
        userStockById(id: $id) {
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
                dailyTimeSeriesEvents(limit: 30) {
                    id
                    eventDate
                    openPrice
                    closePrice
                    highPrice
                    lowPrice
                    volume
                }
                intradayTimeSeriesEvents(limit: 100) {
                    id
                    eventDatetime
                    openPrice
                    closePrice
                    highPrice
                    lowPrice
                    volume
                }
            }
        }
    }
`;

export default UserStockByIdQuery;
