import React from 'react';
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import PricePerShareField from "./PricePerShareField";
import NumberOfSharesField from "./NumberOfSharesField";
import StockSelectField from "./StockSelectField";
import FormButtons2 from "../../../components/common/FormButtons2";
import {createActionCreateOrder} from "../../../redux/actions";


function NewOrderForm({stocks}) {
  const dispatch = useDispatch();
  const {register, handleSubmit, watch, errors} = useForm();

  const onSubmit = data => {
    dispatch(createActionCreateOrder(data));
  };

  return (
    <div className="container-fluid">
      <hr/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StockSelectField stocks={stocks} register={register} errors={errors} watch={watch} debug={false}/>
        <PricePerShareField register={register} errors={errors} watch={watch} debug={false}/>
        <NumberOfSharesField register={register} errors={errors} watch={watch} debug={false}/>
        {/*/!*<TotalAmountField/>*!/*/}
        <FormButtons2/>
      </form>
    </div>
  );
}

NewOrderForm.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.shape({}))
};


export default NewOrderForm;
