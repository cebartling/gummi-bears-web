import React from "react";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function FormButtons2() {
  return (
    <div className="form-group row">
      <div className="offset-sm-2 col-sm-10">
        <button className="btn btn-primary" type="submit">
          <FontAwesomeIcon icon={faSave}/>
          <span className="ml-1">
            Save
          </span>
        </button>
        {/* <FontAwesomeIcon icon={faCog} spin /> */}
      </div>
    </div>
  );
}

FormButtons2.propTypes = {};

export default FormButtons2;
