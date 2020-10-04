import React from 'react';
import ViewTitle from "../../../components/common/ViewTitle";
import {useQuery} from "@apollo/client";
import LoadingAlert from "../../../components/common/LoadingAlert";
import ErrorAlert from "../../../components/common/ErrorAlert";
import {useSelector} from "react-redux";
import {userIdSelector} from "../../../redux/selectors";
import UserStocksByUserIdQuery from "../../../graphql/queries/stocks/UserStocksByUserIdQuery";
import NewOrderForm from "./NewOrderForm";

const NewOrderPage = () => {
  const currentUserId = useSelector(userIdSelector);
  const {loading, error, data} = useQuery(UserStocksByUserIdQuery, {
    variables: {
      id: currentUserId
    }
  });

  if (loading) {
    return (<LoadingAlert message="Please wait while the user's stock information is loaded."/>);
  }
  if (error) {
    return (<ErrorAlert message="Unable to load the user's stock information at this time."/>);
  }

  console.info(data);

  return (
    <div className="p-3">
      <ViewTitle title="New Order"/>
      <NewOrderForm userStocks={data.userById.userStocks}/>
    </div>
  );
}

NewOrderPage.propTypes = {};

export default NewOrderPage;
