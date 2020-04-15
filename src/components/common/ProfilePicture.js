import React from "react";
import {CSSTransitionGroup} from "react-transition-group";
import './ProfilePicture.scss';

const ProfilePicture = (props) => {

    return (
        <CSSTransitionGroup
            transitionName="view"
            transitionAppear={true}
            transitionAppearTimeout={1250}
            transitionEnter={true}
            transitionEnterTimeout={0}
            transitionLeave={false}
            transitionLeaveTimeout={0}>
            <img className="profile-picture" src={props.src} alt="Profile"/>
        </CSSTransitionGroup>
    );
};

export default ProfilePicture;
