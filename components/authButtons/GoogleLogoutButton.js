import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "1062623913459-cajf4d2v5p9gch7ig4dojn0rovoiifjf.apps.googleusercontent.com";

const GoogleLogOutButton = () => {
  const onSuccess = (res) => {
    console.log("Logout Succesfully");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onSuccess={onSuccess}
      />
    </div>
  );
};

export default GoogleLogOutButton;
