import React from 'react';
import {useSelector} from "react-redux";
import {userEmailSelector} from "../redux/selectors";
import {useQuery} from "@apollo/client";
import UserByUsernameQuery from "../graphql/queries/user/UserByUsernameQuery";

function ProfilePage(props) {
    const currentUserEmailAddress = useSelector(userEmailSelector);
    const {loading, error, data} = useQuery(UserByUsernameQuery, {
        variables: {
            username: currentUserEmailAddress
        }
    });

    if (loading) {
        return (<div>Loading profile...</div>);
    }

    if (error) {
        return (<div>An error occurred with the GraphQL query.</div>);
    }

    return (
        <React.Fragment>
            <h1>Profile</h1>
            <div>{currentUserEmailAddress}</div>
            <div>{JSON.stringify(data)}</div>
        </React.Fragment>
    );
}

export default ProfilePage;
