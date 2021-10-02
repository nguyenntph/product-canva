import React from "react";
import Login from "../../components/Login";

const Welcome = props => (
  <div className="flex h-screen">
    <div className="m-auto text-center">
      <div className="text-center font-semibold mb-2">Welcome to Creator Canvas</div>
      <Login {...props} />
    </div>
  </div>
);

export default Welcome;
