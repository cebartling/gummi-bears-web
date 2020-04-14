import React from 'react';
import {useSelector} from "react-redux";
import {useQuery} from "@apollo/client";
import UserByIdQuery from "../graphql/queries/user/UserByIdQuery";
import {userIdSelector} from "../redux/selectors";

function ProfilePage(props) {
    const currentUserId = useSelector(userIdSelector);
    const {loading, error, data} = useQuery(UserByIdQuery, {
        variables: {
            id: currentUserId
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
            <div>{currentUserId}</div>
            <div>{JSON.stringify(data)}</div>
        </React.Fragment>
    );
}

export default ProfilePage;
