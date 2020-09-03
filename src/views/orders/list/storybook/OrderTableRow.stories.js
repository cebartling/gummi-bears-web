import React from 'react';
import '../../../../scss/custom.scss';
import '../../../../scss/animations.scss';
import OrderTableRow from "../OrderTableRow";
import {order1, order2, order3} from "./OrderTableRow.data";

export default {
    title: 'Orders/OrderTableRow',
    component: OrderTableRow,
};

export const defaultComponent = () => (
    <div className="container mt-3">
        <table className="table table-responsive-sm table-bordered table-striped table-hover">
            <thead>
            <tr>
                <th scope="col" className="text-left">Transaction type</th>
                <th scope="col" className="text-left">Local date and time</th>
                <th scope="col" className="text-right">Price</th>
                <th scope="col" className="text-right">Shares</th>
                <th scope="col" className="text-right">Total amount</th>
            </tr>
            </thead>
            <tbody>
            <OrderTableRow order={order1}/>
            <OrderTableRow order={order2}/>
            <OrderTableRow order={order3}/>
            </tbody>
        </table>
    </div>
);
