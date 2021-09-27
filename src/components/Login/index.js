import React from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "./refreshToken";
import { CLIENT_ID } from "../../constants";

const Login = ({ saveSession }) => {
  const success = response => {
    saveSession(response.profileObj);
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
