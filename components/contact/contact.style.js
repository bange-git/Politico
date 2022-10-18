import styled from "styled-components";

export const FlexContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormCard = styled.div`
  width: 35%;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 98%;
    padding: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormGroup = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormGroupLeft = styled(FormGroup)`
  width: 49%;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: unset;
    margin: 10px auto;
  }
`;
export const FormGroupRight = styled(FormGroup)`
  width: 49%;
  margin-left: 4px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: unset;
    margin: 10px auto;
  }
`;

export const InputField = styled.input`
  padding-left: 10px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid gray;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
`;

export const SubmitButton = styled.button`
  border-radius: 5px;
  padding: 15px 20px;
  background: #003171;
  border: 1px solid #fff;
  font-weight: bold;
  color: #fff;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    background: #19b5fe;
    transition: color 0.15s ease, border-color 0.15s ease;
    //color:purple;
  }
`;
