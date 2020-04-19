import React from "react";
import PropTypes from "prop-types";

function FormButtons({canSubmit, isSubmitting}) {
    return (
        <div className="form-group row">
            <div className="offset-sm-2 col-sm-10">
                <button className="btn btn-primary" type="submit" disabled={!canSubmit}>Save</button>
                <em>{isSubmitting ? "Submitting..." : null}</em>
            </div>
        </div>
    );
}

FormButtons.propTypes = {
    canSubmit: PropTypes.bool.isRequired,
    isSubmitting: PropTypes.bool.isRequired
};

export default FormButtons;
