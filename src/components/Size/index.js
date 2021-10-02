import React from "react";

const Size = ({ canvasSize, setCanvasSize }) => {
  return (
    <div className="h-full p-2">
      <div className="mb-5 relative">
        <input
          type="number"
          id="width"
          value={canvasSize["width"]}
          className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
          onChange={e => {
            setCanvasSize({ width: e.target.value, height: canvasSize["height"] });
          }}
          autoComplete="off"
          min={1}
        />
        <label
          htmlFor="width"
          className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >
          Width
        </label>
      </div>
      <div className="mb-5 relative">
        <input
          type="number"
          id="height"
          value={canvasSize["height"]}
          className="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
          onChange={e => {
            setCanvasSize({ width: canvasSize["width"], height: e.target.value });
          }}
          autoComplete="off"
          min={1}
        />
        <label
          htmlFor="height"
          className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >
          Height
        </label>
      </div>
    </div>
  );
};

export default Size;
