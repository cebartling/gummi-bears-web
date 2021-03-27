import React from "react";
import './ProfilePicture.scss';
import {useUser} from 'reactfire';

const ProfilePicture = () => {
    const { data: user } = useUser();

    return (
        <img className="profile-picture" src={user.photoURL} alt="Profile"/>
    );
};

ProfilePicture.propTypes = {
};

export default ProfilePicture;
