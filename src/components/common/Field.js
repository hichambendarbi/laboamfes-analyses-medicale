import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const Field = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  disabled,
  defaultValue
}) => {
  return (
    <div className="form-group">
      {placeholder && <div>{placeholder}</div>}
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

Field.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  info: propTypes.string,
  error: propTypes.string,
  type: propTypes.string.isRequired,
  onChange: propTypes.func,
  disabled: propTypes.string
};

Field.defaultProps = {
  type: "text"
};

export default Field;
