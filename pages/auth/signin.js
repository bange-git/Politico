import React from "react";
import { useRouter } from "next/router";
import {
  FlexContact,
  InputField,
  Form,
  FormGroup,
  FormCard,
  Label,
  SubmitButton,
  FlexRow,
  FormGroupLeft,
  FormGroupRight,
} from "../../components/contact/contact.style";
import {
  GoogleLoginButton,
  FacebookLoginButton,
  GoogleLogoIcon,
  FacebookLogoIcon,
  OR,
} from "../../components/register/Register.style";
import { Container } from "../../components/about/AboutPage.style";

const Register = ({ providers }) => {
  const { data: session } = useSession();
  console.log(session);
  const { push } = useRouter();

  console.log(providers);
  // const providers = [
  //   { name: "google", Icon: GoogleLogoIcon },
  //   { name: "facebook", Icon: FacebookLogoIcon },
  // ];

  const handleAuth = (provider) => () => {
    signIn(provider);
    console.log(event);
    console.log("===>", provider);
  };

  return (
    <>
      <Container>
        <FlexContact>
          <FormCard>
            <Form>
              <FlexRow>
                <FormGroupLeft>
                  <Label>First name</Label>
                  <InputField type="text" placeholder="First Name"></InputField>
                </FormGroupLeft>
                <FormGroupRight>
                  <Label>Last name</Label>
                  <InputField type="text" placeholder="Last  Name"></InputField>
                </FormGroupRight>
              </FlexRow>
              <FormGroup>
                <Label>Email</Label>
                <InputField type="email" placeholder="Email"></InputField>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <InputField type="password" placeholder="password"></InputField>
              </FormGroup>
              <FormGroup>
                <SubmitButton>Sign Up</SubmitButton>
              </FormGroup>
              <OR>
                <div>
                  <hr />
                  or
                  <hr />
                </div>
              </OR>
              <FormGroup>
                {/* {providers.map(({ name, Icon }) => (
                  <GoogleLoginButton key={name} onClick={handleAuth(name)}>
                    {<Icon />}
                    <span>Sign In With {name}</span>
                  </GoogleLoginButton>
                ))} */}
                {Object.values(providers).map(({ name, id }) => (
                  <GoogleLoginButton
                    key={name}
                    onClick={(e) => {
                      e.preventDefault();
                      signIn(id);
                    }}
                  >
                    {<GoogleLogoIcon />}
                    <span>Sign In With {name}</span>
                  </GoogleLoginButton>
                ))}
              </FormGroup>
            </Form>
            {session && (
              <>
                <p>You are signed in as {session.user.name}</p>
                <button onClick={() => signOut()}>SignOut</button>
              </>
            )}
          </FormCard>
        </FlexContact>
      </Container>
    </>
  );
};


