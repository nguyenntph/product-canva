import React, { useState } from "react";
import Welcome from "../Welcome";
import Editor from "../Editor";

const App = () => {
  const [session, saveSession] = useState({});

  return session ? (
    <Editor name={"Hello"} saveSession={saveSession} />
  ) : (
    <Welcome saveSession={saveSession} />
  );
};

export default App;
