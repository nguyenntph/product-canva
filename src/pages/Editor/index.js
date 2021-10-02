import React, { useRef, useState } from "react";
import Logout from "../../components/Logout";
import Sidebar from "../../components/Sidebar";
import Canvas from "../../components/Canvas";

const Editor = ({ name, saveSession }) => {
  const [canvasSize, setCanvasSize] = useState({
    width: 700,
    height: 700
  });

  const dragUrl = useRef();

  return (
    <>
      <div className="w-full px-4 py-2 flex justify-between bg-gray-300 hidden">
        <h1 className="text-left font-semibold self-center">Welcome {name}</h1>
        <div className="text-right">
          <Logout saveSession={saveSession} />
        </div>
      </div>
      <div className="flex h-screen overflow-hidden">
        <div className="w-1/4 border-r">
          <Sidebar dragUrl={dragUrl} canvasSize={canvasSize} setCanvasSize={setCanvasSize}/>
        </div>
        <div className="w-3/4 bg-gray-600 h-screen">
          <Canvas dragUrl={dragUrl} size={canvasSize} />
        </div>
      </div>
    </>
  );
};

export default Editor;
