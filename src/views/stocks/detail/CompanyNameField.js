import React from "react";
import {useField} from "react-form";

function CompanyNameField() {
    const options = {
        validate: async function (name, instance) {
            if (!name) {
                return "A company name is required";
            }

            return instance.debounce(async () => {
                console.log("checking company name");
                await new Promise(resolve => setTimeout(resolve, 1000));
                // All names are valid, so return a false error
                return false;
            }, 500);
        }
    };
    const {meta: {error, isTouched, isValidating}, getInputProps} = useField('companyName', options);

    return (
        <div className="form-group row">
            <label htmlFor="companyName" className="col-sm-2 col-form-label">Company name</label>
            <div className="col-sm-6">
                <input {...getInputProps()} id="companyName" className="form-control"/>
            </div>
            <div className="col-sm-4 validation-error__message">
                {isValidating ? (<em>Validating...</em>) : isTouched && error ? (<em>{error}</em>) : null}
            </div>
        </div>
    );
}

export default CompanyNameField;
