import React from 'react';
import {useSelector} from 'react-redux';
import {useQuery} from '@apollo/client';
import {useHistory} from 'react-router-dom';
import {userIdSelector} from '../../../redux/selectors';
import UserByIdQuery from '../../../graphql/queries/user/UserByIdQuery';
import LoadingAlert from '../../../components/common/LoadingAlert';
import ErrorAlert from '../../../components/common/ErrorAlert';
import ViewTitle from '../../../components/common/ViewTitle';
import StocksListingToolbar from './StocksListingToolbar';
import StocksListingTable from './StocksListingTable';

function StocksListingPage({ location }) {
    const currentUserId = useSelector(userIdSelector);
    const {loading, error, data, refetch} = useQuery(UserByIdQuery, {
        variables: {
            id: currentUserId
        }
    });
    const history = useHistory();

    if (location.state?.shouldRefetch) {
        refetch();
    }

    if (loading) {
        return (<LoadingAlert message="Please wait while the stocks information is loaded."/>);
    }

    if (error) {
        return (<ErrorAlert message="Unable to load the stocks information at this time."/>);
    }

    function onClickAddNewStock() {
        history.push('/stock/new');
    }

    function onChangeFilterField(changeEvent) {
        console.log('onChangeFilterField triggered:', changeEvent);
    }

    return (
        <div className="p-3">
            <ViewTitle title="Stocks"/>
            <StocksListingToolbar onClickAddNewStock={onClickAddNewStock}
                                  onChangeFilterField={onChangeFilterField}/>
            <StocksListingTable userStocks={data.userById.userStocks}/>
        </div>
    );
}

export default StocksListingPage;
