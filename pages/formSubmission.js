import React, { useState } from "react";
import InputFieldComp from "../components/InputField/InputField";
import {
  Form,
  FormCard,
  FlexContact,
  SubmitButton,
} from "../components/contact/contact.style";
import { Container } from "../components/about/AboutPage.style";

const formSubmission = () => {
  const [loginInfo, setLoginInfo] = useState({ name: "", email: "" });
  const [userList, setUserList] = useState([]);

  const { name, email } = loginInfo;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(loginInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUserList([...userList, loginInfo]);
    setLoginInfo({});
  };
  console.log(userList);

  return (
    <>
      <Container>
        <FlexContact>
          <FormCard>
            <Form>
              <InputFieldComp
                type="text"
                value={name}
                placeholder="Enter Name"
                label="Name"
                name="name"
                onChange={handleChange}
              />
              <InputFieldComp
                type="text"
                value={email}
                placeholder="Enter Email"
                label="Email"
                name="email"
                onChange={handleChange}
              />
              <SubmitButton onClick={handleSubmit}>Login</SubmitButton>
            </Form>
            {userList.map((user, index) => {
              return (
                <div key={index}>
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                </div>
              );
            })}
          </FormCard>
        </FlexContact>
      </Container>
    </>
  );
};

export default formSubmission;
