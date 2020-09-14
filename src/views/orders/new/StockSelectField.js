import React from 'react';
import PropTypes from "prop-types";
import {useField} from "react-form";

const StockSelectField = ({stocks}) => {

  const options = {
    validate: async function (name, instance) {
      if (!name) {
        return "Company stock is required!";
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
  const {meta: {error, isTouched, isValidating}, getInputProps} = useField('stock', options);

  return (
    <div className="form-group row">
      <label htmlFor="stock" className="col-sm-2 col-form-label">Number of share</label>
      <div className="col-sm-2">
        <select {...getInputProps()}
                id="stock"
                className="form-control">
          {stocks.map((stock) => {
            return (
              <option value={stock.id}>
                {stock.symbol} - {stock.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-sm-8 validation-error__message">
        {isValidating ? (<em>Validating...</em>) : isTouched && error ? (<em>{error}</em>) : null}
      </div>
    </div>
  );
};

StockSelectField.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  }))
};

export default StockSelectField;
