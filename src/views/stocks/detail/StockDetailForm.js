import React from "react";
import PropTypes from 'prop-types';
import {useField, useForm} from "react-form";
import "./StockDetailForm.scss";

async function sendToFakeServer(values) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return values;
}

async function validateSymbol(value) {
    if (!value) {
        return "A stock symbol is required";
    }
    return false;
}

async function validateCompanyName(name, instance) {
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

function CompanyNameField() {
    const {meta: {error, isTouched, isValidating}, getInputProps} = useField("companyName",
        {
            validate: validateCompanyName
        });

    return (
        <div className="form-group row">
            <label htmlFor="companyName" className="col-sm-2 col-form-label">Company name</label>
            <div className="col-sm-6">
                <input {...getInputProps()} id="companyName" className="form-control"/>
            </div>
            <div className="col-sm-4">
                {isValidating ? (<em>Validating...</em>) : isTouched && error ? (<em>{error}</em>) : null}
            </div>
        </div>
    );
}

function SymbolField() {
    const {meta: {error, isTouched, isValidating}, getInputProps} = useField("symbol",
        {
            validate: validateSymbol
        });

    return (
        <div className="form-group row">
            <label htmlFor="stockSymbol" className="col-sm-2 col-form-label">Stock symbol</label>
            <div className="col-sm-2">
                <input {...getInputProps()} id="stockSymbol" className="form-control symbol-field"/>
            </div>
            <div className="col-sm-8">
                {isValidating ? (<em>Validating...</em>) : isTouched && error ? (<em>{error}</em>) : null}
            </div>
        </div>
    );
}

function StockDetailForm({debugForm = false}) {
    // Use the useForm hook to create a form instance
    const useFormOptions = {
        onSubmit: async (values, instance) => {
            // onSubmit (and everything else in React Form)
            // has async support out-of-the-box
            await sendToFakeServer(values);
            console.log("Huzzah!");
        },
        debugForm: debugForm
    };
    const {Form, meta: {isSubmitting, canSubmit}} = useForm(useFormOptions);

    return (
        <Form>
            <CompanyNameField/>
            <SymbolField/>

            <div className="form-group row">
                <div className="offset-sm-2 col-sm-10">
                    <button className="btn btn-primary" type="submit" disabled={!canSubmit}>Submit</button>
                    <em>{isSubmitting ? "Submitting..." : null}</em>
                </div>
            </div>
        </Form>
    );
}

StockDetailForm.propTypes = {
    debugForm: PropTypes.bool
};

export default StockDetailForm;

