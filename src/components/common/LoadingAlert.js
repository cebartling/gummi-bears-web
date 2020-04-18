import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from "react-transition-group";

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
                    {message}
                </div>
            </div>
        </CSSTransitionGroup>
    );
}

LoadingAlert.propTypes = {
    message: PropTypes.string.isRequired
}

export default LoadingAlert;
