import React from 'react';
import StocksListingView from "./StocksListingView";
import {useSelector} from "react-redux";
import {userIdSelector} from "../../../redux/selectors";
import {useQuery} from "@apollo/client";
import UserByIdQuery from "../../../graphql/queries/user/UserByIdQuery";
import LoadingAlert from "../../../components/common/LoadingAlert";
import ErrorAlert from "../../../components/common/ErrorAlert";

function StocksListingPage() {
    const currentUserId = useSelector(userIdSelector);
    const {loading, error, data} = useQuery(UserByIdQuery, {
        variables: {
            id: currentUserId
        }
    });

    if (loading) {
        return (<LoadingAlert message="Please wait while the stocks information is loaded."/>);
    }

    if (error) {
        return (<ErrorAlert message="Unable to load the stocks information at this time." />);
    }

    return (
        <StocksListingView userStocks={data.userById.stocks}/>
    );
}

export default StocksListingPage;
