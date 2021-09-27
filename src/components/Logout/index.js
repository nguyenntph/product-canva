import React from "react";
import { GoogleLogout } from "react-google-login";
import { CLIENT_ID } from "../../constants";

const Logout = ({ saveSession }) => {
  const logout = () => {
    saveSession(null);
  };

  return (
    <GoogleLogout clientId={CLIENT_ID} buttonText="Logout" onLogoutSuccess={logout} />
  );
};

export default Logout;
