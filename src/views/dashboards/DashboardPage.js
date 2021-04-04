import React from 'react';
import {useSelector} from 'react-redux';
import {useQuery} from '@apollo/client';
import {userIdSelector} from '../../redux/selectors';
import LoadingAlert from '../../components/common/LoadingAlert';
import ErrorAlert from '../../components/common/ErrorAlert';
import WatchListStocksQuery from '../../graphql/queries/stocks/WatchListStocksQuery';

function DashboardPage() {
    const currentUserId = useSelector(userIdSelector);
    const {loading, error, data} = useQuery(WatchListStocksQuery, {
        variables: {
            id: currentUserId
        }
    });

    if (loading) {
        return (
            <LoadingAlert message="Please wait while the watch list information is loaded."/>
        );
    }

    if (error) {
        return (
            <ErrorAlert message="Unable to load the watch list information at this time."/>
        );
    }

    const {userById: {userStocks}} = data;
    console.log('User stocks', userStocks);

    return (
        <>
            <div className="row" data-testid="dashboard-page-watch-list-row">
                {/*<WatchList watchListStocks={userStocks}/>*/}
            </div>
        </>
    );
}

export default DashboardPage;
