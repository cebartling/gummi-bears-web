import React from 'react';
import PropTypes from 'prop-types';
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function LoadingAlert({message}) {
    return (
        <div className="row" data-testid="loading-alert-component">
            <div className="alert alert-info col-sm-12">
                <FontAwesomeIcon icon={faInfoCircle}/> {message}
            </div>
        </div>
    );
}

LoadingAlert.propTypes = {
    message: PropTypes.string.isRequired
}

export default LoadingAlert;
