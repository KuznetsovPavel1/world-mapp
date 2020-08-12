import React from "react";
import PropTypes from "prop-types";

const CustomCheckbox = ({ value = "", checked = false, onChange }) => {
  return (
    <label className={`custom-checkbox ${checked ? "checkbox-checked" : ""}`}>
      <input
        className="custom-checkbox__input"
        type="checkbox"
        checked={checked}
        value={value}
        onChange={onChange}
      />
      {value && <span className="custom-checkbox__value">{value}</span>}
    </label>
  );
};

CustomCheckbox.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CustomCheckbox;
