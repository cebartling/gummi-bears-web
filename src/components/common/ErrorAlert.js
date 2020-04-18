import React from 'react';
import PropTypes from 'prop-types';

function ErrorAlert({message}) {
    return (
        <div className="row">
            <div className="alert alert-danger col-sm-12 m-3">
                {message}
            </div>
        </div>
    );
}

ErrorAlert.propTypes = {
    message: PropTypes.string.isRequired
}

export default ErrorAlert;
