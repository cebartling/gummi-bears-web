import React from 'react';
import '../../../../scss/custom.scss';
import '../../../../scss/animations.scss';
import OrdersToolbar from "../OrdersToolbar";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Orders/OrdersToolbar',
    component: OrdersToolbar,
};

export const defaultComponent = () => (
    <div className="container mt-3">
        <OrdersToolbar onClickAddNewOrder={action('onClickAddNewOrder')}/>
    </div>
);

