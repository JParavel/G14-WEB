import React from "react";

function Input(props) {
  const { children, type, onChange, placeholder } = props;
  return (
    <label className="input">
      <b>{children}</b>
      <input type={type} placeholder={placeholder} onChange={onChange}></input>
    </label>
  );
}

export default Input;
