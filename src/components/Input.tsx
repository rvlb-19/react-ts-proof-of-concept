import React from "react";

export interface InputProps {
  name: string;
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

const Input:React.FC<InputProps> = ({ name, value, onChange }) => {
  return (
    <input type="text" value={value} onChange={onChange} name={name} />
  );
}

export default Input;