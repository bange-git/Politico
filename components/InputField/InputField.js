import { InputField, Label, FormGroup } from "../contact/contact.style";

import React from "react";

const InputFieldComp = ({ value, label, name, placeholder, type, onChange }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <InputField
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </FormGroup>
  );
};

export default InputFieldComp;
