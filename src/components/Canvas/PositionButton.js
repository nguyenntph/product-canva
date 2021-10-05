import React, { useState } from "react";
import { goForward, goBackward, goToFront, goToBack } from "./helpers";

const PositionButton = ({ disabled, elements, setElements, selectedIndex, setIndex }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className={`inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed ${disabled &&
            "cursor-not-allowed"}`}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          disabled={disabled}
          onClick={() => setOpen(!open)}
        >
          Position
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`z-50 origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${!open &&
          "hidden"}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          <button
            onClick={goToFront(elements, setElements, selectedIndex, setIndex)}
            className="w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 text-left"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
          >
            Forward
          </button>
          <button
            onClick={goForward(elements, setElements, selectedIndex, setIndex)}
            className="w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 text-left"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
          >
            Up
          </button>
          <button
            onClick={goBackward(elements, setElements, selectedIndex, setIndex)}
            className="w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 text-left"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-2"
          >
            Down
          </button>
          <button
            onClick={goToBack(elements, setElements, selectedIndex, setIndex)}
            className="w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 text-left"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-2"
          >
            Bottom
          </button>
        </div>
      </div>
    </div>
  );
};

export default PositionButton;
