import React from 'react';
import ViewTitle from "../../../components/common/ViewTitle";
import NewOrderForm from "./NewOrderForm";
import {useQuery} from "@apollo/client";
import LoadingAlert from "../../../components/common/LoadingAlert";
import ErrorAlert from "../../../components/common/ErrorAlert";
import AllStocksQuery from "../../../graphql/queries/stocks/AllStocksQuery";

const NewOrderPage = () => {
  const {loading, error, data} = useQuery(AllStocksQuery, {});
  if (loading) {
    return (<LoadingAlert message="Please wait while the stock information is loaded."/>);
  }
  if (error) {
    return (<ErrorAlert message="Unable to load the stock information at this time."/>);
  }

  return (
    <div className="p-3">
      <ViewTitle title="New Order"/>
      <NewOrderForm stocks={data.stocks} debugForm={false}/>
    </div>
  );
}

NewOrderPage.propTypes = {};

export default NewOrderPage;
