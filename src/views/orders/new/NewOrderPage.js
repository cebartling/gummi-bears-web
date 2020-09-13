import React from 'react';
import ViewTitle from "../../../components/common/ViewTitle";
import NewOrderForm from "./NewOrderForm";

function NewOrderPage() {
  return (
    <div className="p-3">
      <ViewTitle title="New Order"/>
      <NewOrderForm debugForm={false}/>
    </div>
  );
}

NewOrderPage.propTypes = {};

export default NewOrderPage;
