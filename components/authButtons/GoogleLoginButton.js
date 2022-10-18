import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "1062623913459-cajf4d2v5p9gch7ig4dojn0rovoiifjf.apps.googleusercontent.com";

const GoogleLoginButton = () => {
  const onSuccess = (res) => {
    console.log("Login Success! current user: ", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("Login Failed! res: ", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Continue with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleLoginButton;
