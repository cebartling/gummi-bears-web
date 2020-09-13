import React from 'react';
import {useField} from "react-form";

const PricePerShareField = () => {
  const options = {
    validate: async function (name, instance) {
      if (!name) {
        return "Price per share is required!";
      }
      return false;
      // return instance.debounce(async () => {
      //     console.log("checking company name");
      //     await new Promise(resolve => setTimeout(resolve, 1000));
      //     All names are valid, so return a false error
      // return false;
      // }, 500);
    }
  };
  const {meta: {error, isTouched, isValidating}, getInputProps} = useField('pricePerShare', options);

  return (
    <div className="form-group row">
      <label htmlFor="pricePerShare" className="col-sm-2 col-form-label">Price per share</label>
      <div className="col-sm-2">
        <input {...getInputProps()}
               type="text"
               id="pricePerShare"
               className="form-control text-right"/>
      </div>
      <div className="col-sm-8 validation-error__message">
        {isValidating ? (<em>Validating...</em>) : isTouched && error ? (<em>{error}</em>) : null}
      </div>
    </div>
  );
};

PricePerShareField.propTypes = {};

export default PricePerShareField;
