import React from 'react';
import PropTypes from "prop-types";

const OrderTypeField = ({register, errors, watch, debug = false}) => {

  if (debug) console.log(watch("transactionType"));
  const transactionTypes = [
    {label:'Buy', value: 'buy'},
    {label:'Sell', value: 'sell'}
  ];

  return (
    <div className="form-group row">
      <label htmlFor="transactionType" className="col-sm-2 col-form-label">Order type</label>
      <div className="col-sm-2">
        <select ref={register({required: true})}
                name="transactionType"
                id="transactionType"
                className="form-control">
          {transactionTypes.map( transactionType => {
            return (
              <option value={transactionType.value} key={transactionType.value}>
                {transactionType.label}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-sm-8 validation-error__message">
        {errors.transactionType && <span>An order type selection is required</span>}
      </div>
    </div>
  );
};

OrderTypeField.propTypes = {
  debug: PropTypes.bool,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired
};

export default OrderTypeField;
