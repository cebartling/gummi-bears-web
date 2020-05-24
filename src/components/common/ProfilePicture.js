import React from "react";
import PropTypes from 'prop-types';
import './ProfilePicture.scss';

const ProfilePicture = ({src}) => {

    return (
        <img className="profile-picture" src={src} alt="Profile"/>
    );
};

ProfilePicture.propTypes = {
    src: PropTypes.string.isRequired
};

export default ProfilePicture;
