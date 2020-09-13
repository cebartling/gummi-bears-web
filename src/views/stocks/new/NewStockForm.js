import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-form';
import SymbolField from './SymbolField';
import CompanyNameField from './CompanyNameField';
import FormButtons from '../../../components/common/FormButtons';
import {createActionCreateStock} from '../../../redux/actions';

function NewStockForm({debugForm = false}) {
    const dispatch = useDispatch();

    // Use the useForm hook to create a form instance
    const useFormOptions = {
        onSubmit: async (values, instance) => {
            dispatch(createActionCreateStock(values));
        },
        debugForm: debugForm,
        validatePristine: true
    };
    const {Form, meta: {isSubmitting, canSubmit}} = useForm(useFormOptions);

    return (
        <div className="container-fluid">
            <Form>
                <CompanyNameField/>
                <SymbolField/>
                <FormButtons canSubmit={canSubmit} isSubmitting={isSubmitting}/>
            </Form>
        </div>
    );
}

NewStockForm.propTypes = {
    debugForm: PropTypes.bool
};

export default NewStockForm;
