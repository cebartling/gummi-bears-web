import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {userIdSelector} from '../../../redux/selectors';
import ViewTitle from '../../../components/common/ViewTitle';
import OrdersTable from './OrdersTable';
import OrdersToolbar from "./OrdersToolbar";

function OrdersPage({location}) {
    const currentUserId = useSelector(userIdSelector);
    // const {loading, error, data, refetch} = useQuery(UserStockOrdersQuery, {
    //     variables: {
    //         id: currentUserId
    //     }
    // });
    const history = useHistory();

    // if (location.state?.shouldRefetch) {
    //     refetch();
    // }

    // if (loading) {
    //     return (<LoadingAlert message="Please wait while the Orders information is loaded."/>);
    // }

    // if (error) {
    //     return (<ErrorAlert message="Unable to load the Orders information at this time."/>);
    // }

    function onClickAddNewOrder() {
        history.push('/order/new');
    }

    return (
        <div className="p-3">
            <ViewTitle title="Orders"/>
            <OrdersToolbar onClickAddNewOrder={onClickAddNewOrder}/>
            {/*{data.userById.userStocks.map((userStock) => {*/}
            {/*    if (userStock.userStockOrders.length > 0) {*/}
            {/*        return (<OrdersTable userStock={userStock} key={userStock.id}/>);*/}
            {/*    } else {*/}
            {/*        return null;*/}
            {/*    }*/}
            {/*})}*/}
        </div>
    );
}

OrdersTable.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.shape({
            shouldRefetch: PropTypes.bool
        })
    })
};

export default OrdersPage;
