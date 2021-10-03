import React from "react";
import ZoomIn from "./assets/zoom-in.svg";
import ZoomOut from "./assets/zoom-out.svg";

const ResizeButton = ({ scale, setScale }) => {
  const scaleImage = ({ additional = 0, value = scale }) => {
    setScale(value + additional);
  };

  const percentage = Math.round(scale * 100);

  return (
    <div className="flex bg-gray-200 opacity-40 hover:opacity-100 rounded">
      <button
        onClick={() => scaleImage({ additional: -0.1 })}
        className="hover:bg-gray-300 py-2 px-3 rounded"
      >
        <img src={ZoomOut} width="24" />
      </button>
      <button
        onClick={() => scaleImage({ value: 1 })}
        className="hover:bg-gray-300 text-black py-2 px-3 rounded"
      >
        <span id="percentage">{percentage}%</span>
      </button>
      <button
        onClick={() => scaleImage({ additional: 0.1 })}
        className="hover:bg-gray-300 py-2 px-3 rounded"
      >
        <img src={ZoomIn} width="24" />
      </button>
    </div>
  );
};

export default ResizeButton;
