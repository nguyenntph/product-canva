import React, { useRef } from "react";
import Sidebar from "../Sidebar";
import Canvas from "../Canvas";

const App = () => {
  const dragUrl = useRef();

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/6 border-r">
        <Sidebar dragUrl={dragUrl} />
      </div>
      <div className="w-5/6 bg-gray-600 h-screen">
        <Canvas dragUrl={dragUrl} />
      </div>
    </div>
  );
};

export default App;
