import {gql} from '@apollo/client';

const SymbolSearchQuery = gql`
    query SymbolSearch($keywords: String!) {
        symbolSearch(keywords: $keywords) {
            symbol
            name
        }
    }
`;

export default SymbolSearchQuery;
