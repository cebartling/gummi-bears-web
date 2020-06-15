import {gql} from '@apollo/client';

const WatchListStocksQuery = gql`
    query UserById($id: ID!) {
        userById(id: $id) {
            userStocks {
                id
                stock {
                    id
                    name
                    symbol
                    currentPrice
                    openPrice
                    highPrice
                    lowPrice
                    previousClosePrice
                    volume
                    percentChange
                    priceChange
                    latestTradingDate
                }
            }
        }
    }
`;

export default WatchListStocksQuery;

