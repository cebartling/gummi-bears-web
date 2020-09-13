import React from 'react';
import PropTypes from "prop-types";
import {useField} from "react-form";

const TotalAmountField = () => {
  const options = {};
  const {meta: {getInputProps}} = useField('totalAmount', options);

  return (
    <div className="form-group row">
      <label htmlFor="totalAmount" className="col-sm-4 col-form-label">Number of share</label>
      <div className="col-sm-4">
        <input {...getInputProps()}
               type="text"
               id="totalAmount"
               className="form-control"
               readOnly="readOnly"/>
      </div>
      <div className="col-sm-4 validation-error__message">
      </div>
    </div>
  );
};

TotalAmountField.propTypes = {};

export default TotalAmountField;
