import styled from "styled-components";
import { FacebookLogo, GoogleLogo, GitHubLogo } from "../../static/assets";
//import { FacebookLogo, GoogleLogo } from "static/assets";

export const OR = styled.div`
  width: 100%;
  padding: 10px 0;

  div {
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    align-items: center;
    margin: 10px 0 0 0;
    hr {
      width: 35px;
      margin: 0 5px;
      border: 0.5px solid rgb(191, 211, 243);
    }
  }
`;

export const GoogleLoginButton = styled.button`
  border-radius: 5px;
  padding: 15px 20px;
  background: #fff;
  border: 1px solid gray;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 50px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    transition: color 0.15s ease, border-color 0.15s ease;
  }
`;

export const FacebookLoginButton = styled(GoogleLoginButton)`
  background: #003171;
  border: 1px solid #fff;
  font-weight: bold;
  color: #fff;
  font-size: 1.2rem;
`;

export const FacebookLogoIcon = styled(FacebookLogo)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 2rem;
`;

export const GoogleLogoIcon = styled(GoogleLogo)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 2rem;
`;

export const GitHubLogoIcon = styled(GitHubLogo)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 2rem;
`;
