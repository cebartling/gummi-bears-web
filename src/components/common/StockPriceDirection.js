import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown, faArrowCircleUp} from "@fortawesome/free-solid-svg-icons";
import './StockPriceDirection.scss';

const StockPriceDirection = ({openPrice, closePrice}) => {
    if (openPrice === closePrice) return null;
    return (closePrice > openPrice) ?
        (<FontAwesomeIcon icon={faArrowCircleUp} className="price-direction-up"/>) :
        (<FontAwesomeIcon icon={faArrowCircleDown} className="price-direction-down"/>);
};

StockPriceDirection.propTypes = {
    openPrice: PropTypes.number.isRequired,
    closePrice: PropTypes.number.isRequired,
};

export default StockPriceDirection;
