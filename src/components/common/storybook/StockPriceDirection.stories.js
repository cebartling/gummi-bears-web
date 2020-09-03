import React from 'react';
import StockPriceDirection from "../StockPriceDirection";

export default {
    title: 'Common/StockPriceDirection',
    component: StockPriceDirection,
};

export const priceDirectionUp = () => (
    <div className="container mt-3">
        <StockPriceDirection closePrice={5} openPrice={4}/>
    </div>
);

export const priceDirectionDown = () => (
    <div className="container mt-3">
        <StockPriceDirection closePrice={5} openPrice={6}/>
    </div>
);

