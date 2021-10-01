import React from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "./refreshToken";
import { CLIENT_ID } from "../../constants";
import API from "../../helpers/api";

const Login = ({ saveSession }) => {
  const api = new API();

  const sendUserInfo = ({ name, email }) => {
    api
      .createUser({ user: { name: name, email: email } })
      .then(() => console.log("OK"))
      .catch(err => console.log(err));
  };

  const success = response => {
    const profile = response.profileObj;
    saveSession(profile);
    sendUserInfo({ name: profile.name, email: profile.email });
    refreshTokenSetup(response, saveSession);
  };
  const fail = response => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      buttonText="Login"
      onSuccess={success}
      onFailure={fail}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};

export default Login;
