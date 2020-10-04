import React from 'react';
import PropTypes from "prop-types";

const NumberOfSharesField = ({register, errors, watch, debug = false}) => {

  if (debug) console.log(watch("numberOfShares"));

  return (
    <div className="form-group row">
      <label htmlFor="numberOfShares" className="col-sm-2 col-form-label">Number of share</label>
      <div className="col-sm-2">
        <input ref={register({required: true})}
               type="text"
               id="numberOfShares"
               name="numberOfShares"
               className="form-control text-right"/>
      </div>
      <div className="col-sm-8 validation-error__message">
        {errors.numberOfShares && <span>An integral value is required</span>}
      </div>
    </div>
  );
};

NumberOfSharesField.propTypes = {
  debug: PropTypes.bool,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired
};

export default NumberOfSharesField;
