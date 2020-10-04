import React from 'react';
import PropTypes from 'prop-types';

const StockSelectField = ({stocks, register, errors, watch, debug = false}) => {

  if (debug) console.log(watch("stockId"));

  return (
    <div className="form-group row">
      <label htmlFor="stockId" className="col-sm-2 col-form-label">Stock</label>
      <div className="col-sm-2">
        <select ref={register({required: true})}
                name="stockId"
                id="stockId"
                className="form-control">
          {stocks.map((stock) => {
            return (
              <option value={stock.id} key={stock.id}>
                {stock.symbol} - {stock.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-sm-8 validation-error__message">
        {errors.stockId && <span>A selection is required</span>}
      </div>
    </div>
  );
};

StockSelectField.propTypes = {
  debug: PropTypes.bool,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  stocks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  })),
  watch: PropTypes.func.isRequired
};

export default StockSelectField;
