import {gql} from '@apollo/client';

const AllMetricsQuery = gql`
    query RetrieveAllMetrics {
        metrics {
            id
            name
        }
    }
`;

export default AllMetricsQuery;
