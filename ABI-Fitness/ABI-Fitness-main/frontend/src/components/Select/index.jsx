import React from "react";
import "./Select.scss";
/**
 *
 * @param {{label:String, options:Array, htmlFor:String,wrapperStyles:Object}} props
 * @returns {JSX.Element}
 */
function Select({ label, options, htmlFor, wrapperStyles }) {
  return (
    <div className="Select__wrapper">
      {label ? <label htmlFor={htmlFor}>{label}</label> : null}

      <select id={htmlFor} style={wrapperStyles}>
        {options?.map((option, index) => (
          <option key={option} selected={index === 0}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
