import React from "react";
import Sidebar from "../Sidebar";
import Canvas from "../Canvas";

const App = () => (
  <div className="flex h-screen overflow-hidden">
    <div className="w-1/6 border-r">
      <Sidebar />
    </div>
    <div className="w-5/6">
      <Canvas />
    </div>
  </div>
);

export default App;
