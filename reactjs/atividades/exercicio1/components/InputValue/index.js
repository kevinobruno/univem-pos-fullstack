import React from "react";

const InputValue = ({ value, onChange }) => {
  return (
    <input type='number' value={value} onChange={(e) => onChange(e.target.value)} />
  )
}

export default InputValue;
