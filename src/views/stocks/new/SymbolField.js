import React from "react";
import {useField} from "react-form";
import './SymbolField.scss';

function SymbolField() {
    const options = {
        validate: async function (value) {
            if (!value) {
                return "A stock symbol is required";
            }
            return false;
        }
    };
    const {meta: {error, isTouched, isValidating}, getInputProps} = useField('symbol', options);

    return (
        <div className="form-group row">
            <label htmlFor="stockSymbol" className="col-sm-2 col-form-label">Stock symbol</label>
            <div className="col-sm-2">
                <input {...getInputProps()} id="stockSymbol" className="form-control symbol-field"/>
            </div>
            <div className="col-sm-8 validation-error__message">
                {isValidating ? (<em>Validating...</em>) : isTouched && error ? (<em>{error}</em>) : null}
            </div>
        </div>
    );
}

export default SymbolField;
