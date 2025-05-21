import React from "react";

interface I_Input {
  type: string;
  placeholder?: string;
  cls?: string;
  value: string;
  callback: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<I_Input> = ({ type, placeholder, cls, value, callback}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={cls}
      onChange={callback}
    />
  );
};

export default Input;
