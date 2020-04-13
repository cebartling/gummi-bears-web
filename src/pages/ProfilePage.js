import React from 'react';
import {useSelector} from "react-redux";
import {userEmailSelector} from "../redux/selectors";

function ProfilePage(props) {
    const currentUserEmailAddress = useSelector(userEmailSelector);


    return (
        <React.Fragment>
            <h1>Profile</h1>
            <div>{currentUserEmailAddress}</div>
        </React.Fragment>
    );
}

export default ProfilePage;
