import React from 'react';
import PropTypes from 'prop-types';

const StockSelectField = ({userStocks, register, errors, watch, debug = false}) => {

  if (debug) console.log(watch("userStockId"));

  return (
    <div className="form-group row">
      <label htmlFor="userStockId" className="col-sm-2 col-form-label">Stock</label>
      <div className="col-sm-2">
        <select ref={register({required: true})}
                name="userStockId"
                id="userStockId"
                className="form-control">
          {userStocks.map((userStock) => {
            return (
              <option value={userStock.id} key={userStock.id}>
                {userStock.stockSymbol} - {userStock.companyName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-sm-8 validation-error__message">
        {errors.userStockId && <span>A stock selection is required</span>}
      </div>
    </div>
  );
};

StockSelectField.propTypes = {
  debug: PropTypes.bool,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  userStocks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    stockSymbol: PropTypes.string.isRequired
  })),
  watch: PropTypes.func.isRequired
};

export default StockSelectField;
