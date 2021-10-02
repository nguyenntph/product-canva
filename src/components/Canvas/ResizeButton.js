import React from "react";
import ZoomIn from "./assets/zoom-in.svg";
import ZoomOut from "./assets/zoom-out.svg";

const ResizeButton = ({}) => {
  const scaleImage = value => {
    // TODO
  };

  return (
    <div className="flex bg-gray-200 opacity-40 hover:opacity-100 rounded">
      <button onClick={scaleImage(0.9)} className="hover:bg-gray-300 py-2 px-3 rounded">
        <img src={ZoomOut} width="24" />
      </button>
      <button
        onClick={scaleImage(1)}
        className="hover:bg-gray-300 text-black py-2 px-3 rounded"
      >
        Reset
      </button>
      <button onClick={scaleImage(1.1)} className="hover:bg-gray-300 py-2 px-3 rounded">
        <img src={ZoomIn} width="24" />
      </button>
    </div>
  );
};

export default ResizeButton;
