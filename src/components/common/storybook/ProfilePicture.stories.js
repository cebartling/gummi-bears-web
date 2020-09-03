import React from 'react';
import ProfilePicture from "../ProfilePicture";
import imageFile from './DefaultProfilePicture.png';

export default {
    title: 'Common/ProfilePicture',
    component: ProfilePicture,
};

export const defaultProfilePicture = () => <ProfilePicture src={imageFile} />;
