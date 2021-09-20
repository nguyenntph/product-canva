import React from "react";
import ExportButton from "./ExportButton";

const Header = ({ stageRef, canvasSize, setCanvasSize, reset }) => (
  <div className="flex justify-between px-4 pt-3">
    <div className="text-left flex-1"></div>
    <div className="flex-1 justify-center flex">
      <input
        className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-2"
        type="number"
        placeholder="width"
        value={canvasSize["width"]}
        min={1}
        onChange={e => {
          setCanvasSize({ width: e.target.value, height: canvasSize["height"] });
        }}
      />
      <input
        className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-2"
        type="number"
        placeholder="height"
        value={canvasSize["height"]}
        min={1}
        onChange={e => {
          setCanvasSize({ width: canvasSize["width"], height: e.target.value });
        }}
      />
    </div>
    <div className="flex-1 text-right">
      <ExportButton stageRef={stageRef} reset={reset} />
    </div>
  </div>
);
export default Header;
