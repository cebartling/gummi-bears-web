import React from 'react';
import {useSelector} from 'react-redux';
import {useQuery} from '@apollo/client';
import {useHistory} from 'react-router-dom';
import {userIdSelector} from '../../../redux/selectors';
import LoadingAlert from '../../../components/common/LoadingAlert';
import ErrorAlert from '../../../components/common/ErrorAlert';
import ViewTitle from '../../../components/common/ViewTitle';
import UserStockTransactionsQuery from "../../../graphql/queries/transactions/UserStockTransactionsQuery";

function TransactionsPage({ location }) {
    const currentUserId = useSelector(userIdSelector);
    const {loading, error, data, refetch} = useQuery(UserStockTransactionsQuery, {
        variables: {
            id: currentUserId
        }
    });
    const history = useHistory();

    if (location.state?.shouldRefetch) {
        refetch();
    }

    if (loading) {
        return (<LoadingAlert message="Please wait while the transactions information is loaded."/>);
    }

    if (error) {
        return (<ErrorAlert message="Unable to load the transactions information at this time."/>);
    }

    // function onClickAddNewTransaction() {
    //     history.push('/stock/new');
    // }

    // function onChangeFilterField(changeEvent) {
    //     console.log('onChangeFilterField triggered:', changeEvent);
    // }

    return (
        <div className="p-3">
            <ViewTitle title="Transactions"/>
        </div>
    );
}

export default TransactionsPage;
