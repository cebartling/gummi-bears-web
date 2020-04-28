import React from "react";
import PropTypes from "prop-types";
import {faCog, faSave} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function FormButtons({canSubmit, isSubmitting}) {
    return (
        <div className="form-group row">
            <div className="offset-sm-2 col-sm-10">
                <button className="btn btn-primary" type="submit" disabled={!canSubmit}>
                    <FontAwesomeIcon icon={faSave}/> Save
                </button>
                {isSubmitting ? (<FontAwesomeIcon icon={faCog} spin />) : null}
            </div>
        </div>
    );
}

FormButtons.propTypes = {
    canSubmit: PropTypes.bool.isRequired,
    isSubmitting: PropTypes.bool.isRequired
};

export default FormButtons;
