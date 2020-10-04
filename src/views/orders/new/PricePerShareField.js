import React from 'react';
import PropTypes from 'prop-types';


const PricePerShareField = ({register, errors, watch, debug = false}) => {

  if (debug) console.log(watch("pricePerShare"));

  return (
    <div className="form-group row">
      <label htmlFor="pricePerShare" className="col-sm-2 col-form-label">Price per shares</label>
      <div className="input-group col-sm-2">
        <div className="input-group-prepend">
          <span className="input-group-text">$</span>
        </div>
        <input ref={register({required: true})}
               type="text"
               id="pricePerShare"
               name="pricePerShare"
               className="form-control text-right"/>
      </div>
      <div className="col-sm-8 validation-error__message">
        {errors.pricePerShare && <span>A decimal value is required</span>}
      </div>
    </div>
  );
};

PricePerShareField.propTypes = {
  debug: PropTypes.bool,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired
};

export default PricePerShareField;
