import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
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
} from "../contact/contact.style";
import {
  GoogleLoginButton,
  FacebookLoginButton,
  GoogleLogoIcon,
  FacebookLogoIcon,
  GitHubLogoIcon,
} from "./Register.style";
import { Container } from "../about/AboutPage.style";
import { OR } from "./Register.style";

const Register = () => {
  const { data: session } = useSession();
  console.log(session);
  const { push } = useRouter();

  const providers = [
    { name: "google", Icon: GoogleLogoIcon },
    { name: "facebook", Icon: FacebookLogoIcon },
    { name: "github", Icon: GitHubLogoIcon },
  ];

  const handleAuth = (provider) => () => signIn(provider);

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
                  OR
                  <hr />
                </div>
              </OR>
              <FormGroup>
                {providers.map(({ name, Icon }) => (
                  <GoogleLoginButton
                    key={name}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("sign in with provider: ", name);
                      signIn(name);
                    }}
                  >
                    {<Icon />}
                    <span>Sign In With {name}</span>
                  </GoogleLoginButton>
                ))}
              </FormGroup>
            </Form>
            {session && (
              <>
                <p>You are signed in as {session.user.name} </p>
                <button onClick={() => signOut()}>SignOut</button>
              </>
            )}
          </FormCard>
        </FlexContact>
      </Container>
    </>
  );
};

export default Register;
