import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown, faArrowCircleUp} from "@fortawesome/free-solid-svg-icons";

const StockPriceDirection = ({openPrice, closePrice}) => {
    if (openPrice === closePrice) return null;
    return (closePrice > openPrice) ?
        (<FontAwesomeIcon icon={faArrowCircleUp}/>) :
        (<FontAwesomeIcon icon={faArrowCircleDown}/>);
};

export default StockPriceDirection;
