import React from "react";
import { InputField, FormGroup, Label } from "./contact.style";

const FormGroupItem = ({
  name,
  type,
  placeholder,
  value,
  handleInputChange,
}) => {
  return (
    <>
      <FormGroup>
        <Label>{name}</Label>
        <InputField
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={handleInputChange}
          //value={value}
        ></InputField>
      </FormGroup>
    </>
  );
};

export default FormGroupItem;
