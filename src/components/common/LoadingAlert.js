import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from "react-transition-group";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function LoadingAlert({message}) {
    return (
        <CSSTransitionGroup
            transitionName="view"
            transitionAppear={true}
            transitionAppearTimeout={1250}
            transitionEnter={true}
            transitionEnterTimeout={0}
            transitionLeave={false}
            transitionLeaveTimeout={0}>
            <div className="row">
                <div className="alert alert-info col-sm-12">
                    <FontAwesomeIcon icon={faInfoCircle} /> {message}
                </div>
            </div>
        </CSSTransitionGroup>
    );
}

LoadingAlert.propTypes = {
    message: PropTypes.string.isRequired
}

export default LoadingAlert;
