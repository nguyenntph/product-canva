import React from "react";
import DEFAULT_SIZES from "./sizes";

const Size = ({ canvasSize, setCanvasSize }) => (
  <div className="h-full">
    <div className="p-2">
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
          className="peer-placeholder-shown:opacity-100 opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
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
          className="peer-placeholder-shown:opacity-100 opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >
          Height
        </label>
      </div>
    </div>
    <div className="p-2">
      <h3>Popular sizes</h3>
      {DEFAULT_SIZES.map(({ group, logo, posts }) => {
        return (
          <div className="w-full pt-2 pb-3" key={name}>
            <div className="inline-flex font-semibold">
              <img src={logo} width={15} className="mr-2" />
              <span>{group}</span>
            </div>
            <div>
              {posts.map(({ name, width, height }) => (
                <div
                  className="hover:bg-gray-300 p-1 cursor-pointer"
                  key={`${group}-${name}`}
                  onClick={() => setCanvasSize({ width: width, height: height })}
                >
                  <span>{name}</span>
                  <span className="pl-2 text-xs">
                    {width} x {height}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Size;
