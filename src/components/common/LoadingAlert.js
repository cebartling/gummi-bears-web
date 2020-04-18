import React from 'react';
import PropTypes from 'prop-types';

function LoadingAlert({message}) {
    return (
        <div className="row">
            <div className="alert alert-info col-sm-12 m-3">
                {message}
            </div>
        </div>
    );
}

LoadingAlert.propTypes = {
    message: PropTypes.string.isRequired
}

export default LoadingAlert;
