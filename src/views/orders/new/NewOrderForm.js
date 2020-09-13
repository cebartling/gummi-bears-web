import React from 'react';
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {useForm} from "react-form";
import FormButtons from "../../../components/common/FormButtons";
import {createActionCreateOrder} from "../../../redux/actions/order/createOrder";
import PricePerShareField from "./PricePerShareField";
import NumberOfSharesField from "./NumberOfSharesField";

function NewOrderForm({debugForm = false}) {
  const dispatch = useDispatch();

  // Use the useForm hook to create a form instance
  const useFormOptions = {
    onSubmit: async (values, instance) => {
      dispatch(createActionCreateOrder(values));
    },
    debugForm: debugForm,
    validatePristine: true
  };
  const {Form, meta: {isSubmitting, canSubmit}} = useForm(useFormOptions);

  return (
    <div className="container-fluid">
      <Form>
        <PricePerShareField/>
        <NumberOfSharesField/>
        {/*<TotalAmountField/>*/}
        <FormButtons canSubmit={canSubmit} isSubmitting={isSubmitting}/>
      </Form>
    </div>
  );
}

NewOrderForm.propTypes = {
  debugForm: PropTypes.bool
};


export default NewOrderForm;
