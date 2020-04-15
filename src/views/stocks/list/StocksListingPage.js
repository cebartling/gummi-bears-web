import React from 'react';
import StocksListingView from "./StocksListingView";
import {useSelector} from "react-redux";
import {userIdSelector} from "../../../redux/selectors";
import {useQuery} from "@apollo/client";
import UserByIdQuery from "../../../graphql/queries/user/UserByIdQuery";

function StocksListingPage(props) {
    const currentUserId = useSelector(userIdSelector);
    // TODO: StocksByUserIdQuery
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

    const user = data.userById;

    return (
        <StocksListingView/>
    );
}

export default StocksListingPage;
