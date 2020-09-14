import {gql} from '@apollo/client';

const AllStocksQuery = gql`
    query AllStocks {
        stocks {
            id
            name
            symbol
        }
    }
`;

export default AllStocksQuery;
