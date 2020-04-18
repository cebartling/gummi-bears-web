import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from "react-transition-group";

function ErrorAlert({message}) {
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
                <div className="alert alert-danger col-sm-12">
                    {message}
                </div>
            </div>
        </CSSTransitionGroup>
    );
}

ErrorAlert.propTypes = {
    message: PropTypes.string.isRequired
}

export default ErrorAlert;
