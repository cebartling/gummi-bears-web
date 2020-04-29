import React from 'react';
import PropTypes from 'prop-types';

function ViewTitle({title}) {
    return (
        <div className="row">
            <h2>{title}</h2>
        </div>
    );
}

ViewTitle.propTypes = {
    title: PropTypes.any.isRequired
}

export default ViewTitle;
