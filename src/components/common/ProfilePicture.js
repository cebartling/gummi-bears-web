import React from "react";
import {CSSTransitionGroup} from "react-transition-group";
import './ProfilePicture.scss';
import {useSelector} from "react-redux";
import {isAuthenticatedSelector, profilePictureUrlSelector} from "../../redux/selectors";

const ProfilePicture = () => {
    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const profilePictureUrl = useSelector(profilePictureUrlSelector);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <CSSTransitionGroup
            transitionName="view"
            transitionAppear={true}
            transitionAppearTimeout={1250}
            transitionEnter={true}
            transitionEnterTimeout={0}
            transitionLeave={false}
            transitionLeaveTimeout={0}>
            <img className="profile-picture" src={profilePictureUrl} alt="Profile image"/>
        </CSSTransitionGroup>
    );
};

export default ProfilePicture;
