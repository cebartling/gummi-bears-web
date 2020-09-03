import React from 'react';
import '../../../../scss/custom.scss';
import '../../../../scss/animations.scss';
import OrderTableRow from "../OrderTableRow";
import {order1, order2, order3} from "./OrderTableRow.data";
import OrdersTable from "../OrdersTable";
import {userStock} from "./OrdersTable.data";

export default {
    title: 'Orders/OrdersTable',
    component: OrdersTable,
};

export const defaultComponent = () => (
    <div className="container mt-3">
        <OrdersTable userStock={userStock}/>
    </div>
);
