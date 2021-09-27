import React, { useRef, useState } from "react";
import Sidebar from "../Sidebar";
import Login from "../Login";
import Logout from "../Logout";
import Canvas from "../Canvas";

const App = () => {
  const dragUrl = useRef();
  const [session, saveSession] = useState(null);

  return session ? (
    <>
      <div className="w-full px-4 py-2 flex justify-between bg-gray-300">
        <h1 className="text-left font-semibold self-center">
          Welcome {session.familyName} {session.givenName}
        </h1>
        <div className="text-right">
          <Logout saveSession={saveSession} />
        </div>
      </div>
      <div className="flex h-screen overflow-hidden">
        <div className="w-1/6 border-r">
          <Sidebar dragUrl={dragUrl} />
        </div>
        <div className="w-5/6 bg-gray-600 h-screen">
          <Canvas dragUrl={dragUrl} />
        </div>
      </div>
    </>
  ) : (
    <div className="flex h-screen">
      <div className="m-auto text-center">
        <div className="text-center font-semibold mb-2">Welcome to Creator Canvas</div>
        <Login saveSession={saveSession} />
      </div>
    </div>
  );
};

export default App;
