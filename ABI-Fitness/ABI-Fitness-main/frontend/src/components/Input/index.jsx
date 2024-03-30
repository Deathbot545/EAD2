import React from "react";
import "./Input.scss";

/**
 * Enhanced Input component to support form handling.
 * @param {{ placeholder: String, icon: String, type: String, wrapperStyles: Object, name: String, value: String, onChange: Function }} props
 * @returns {JSX.Element}
 */
function Input({ placeholder, icon, type = "text", wrapperStyles, name, value, onChange }) {
  return (
    <div
      className={`Input__wrapper w-100 ${
        type === "checkbox" || type === "radio" ? "checkbox__wrapper" : ""
      }`}
      style={wrapperStyles}
    >
      {icon && <img src={icon} alt="Input icon" />}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
