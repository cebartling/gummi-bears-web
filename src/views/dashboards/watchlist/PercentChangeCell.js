import React from 'react';
import PropTypes from 'prop-types';
import './PercentChangeCell.scss';

function PercentChangeCell({percentChange}) {
    const conditionalStyle = percentChange > 0 ? "percent-change__positive" : "percent-change__negative";
    const classes = `${conditionalStyle} text-right`;

    return (
        <td className={classes} data-testid="percent-change-component">
            {percentChange}%
        </td>
    );
}

PercentChangeCell.propTypes = {
    percentChange: PropTypes.number.isRequired
};

export default PercentChangeCell;
