import React from "react";
import "./Select.scss";
/**
 *
 * @param {{label: String, options: Array, htmlFor: String, wrapperStyles: Object, onChange: Function}} props
 * @returns {JSX.Element}
 */
function Select({ label, options, htmlFor, wrapperStyles, onChange }) {
  return (
    <div className="Select__wrapper">
      {label ? <label htmlFor={htmlFor}>{label}</label> : null}

      <select id={htmlFor} style={wrapperStyles} onChange={onChange}>
        {options?.map((option, index) => (
          // Update: Remove selected attribute to use React's defaultValue on the parent select instead
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
