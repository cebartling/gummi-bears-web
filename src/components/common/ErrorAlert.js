import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

function ErrorAlert({message}) {
    return (
        <div className="row">
            <div className="alert alert-danger col-sm-12">
                <FontAwesomeIcon icon={faExclamationTriangle}/> {message}
            </div>
        </div>
    );
}

ErrorAlert.propTypes = {
    message: PropTypes.string.isRequired
}

export default ErrorAlert;
