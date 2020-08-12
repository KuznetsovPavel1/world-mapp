import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CustomInput = ({
  type = "text",
  value,
  label,
  checked = false,
  className = "custom-form-col",
  onChange,
}) => {
  const ref = useRef(null);
  const [placeholder, setPlaceholder] = useState("placeholder");

  useEffect(() => {
    if (value === "" && document.activeElement !== ref.current) {
      setPlaceholder("placeholder");
    } else {
      setPlaceholder("");
    }
  }, [value]);

  useEffect(() => {
    const el = ref.current;

    el.addEventListener("transitionstart", () => {
      if (value === "" && document.activeElement !== ref.current) {
        setPlaceholder("");
      }
    });

    return () =>
      el.removeEventListener("transitionstart", () => {
        setPlaceholder("");
      });
  }, [value]);

  const absoluteCl = !["checkbox"].includes(type) ? "label-abs" : "";
  const placeholderCl = ["text"].includes(type) ? placeholder : "";

  return (
    <div className="custom-form">
      <label className={className}>
        {label && (
          <span
            className={`${className}__label ${absoluteCl} ${placeholderCl}`}
          >
            {label}
          </span>
        )}

        <input
          ref={ref}
          className={`custom-form__input ${
            type === "checkbox" ? "checkbox-input" : ""
          }`}
          type={type}
          onChange={onChange}
          onFocus={() => {
            setPlaceholder("");
          }}
          onBlur={() => {
            if (value === "") {
              setPlaceholder("placeholder");
            }
          }}
          value={value}
          checked={checked}
          autoComplete="off"
        />
        {type === "checkbox" && (
          <span className="checkbox-span">
            <span className="checkbox-icon">✔</span>
          </span>
        )}
        {type === "text" && <span className="search-group__icon">🔍</span>}
      </label>
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
};

export default CustomInput;
