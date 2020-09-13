import React from 'react';
import {useField} from "react-form";

const NumberOfSharesField = () => {
  const options = {
    validate: async function (name, instance) {
      if (!name) {
        return "A number of shares is required";
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
  const {meta: {error, isTouched, isValidating}, getInputProps} = useField('numberOfShares', options);

  return (
    <div className="form-group row">
      <label htmlFor="numberOfShares" className="col-sm-2 col-form-label">Number of share</label>
      <div className="col-sm-2">
        <input {...getInputProps()}
               type="text"
               id="numberOfShares"
               className="form-control"/>
      </div>
      <div className="col-sm-8 validation-error__message">
        {isValidating ? (<em>Validating...</em>) : isTouched && error ? (<em>{error}</em>) : null}
      </div>
    </div>
  );
};

NumberOfSharesField.propTypes = {};

export default NumberOfSharesField;
