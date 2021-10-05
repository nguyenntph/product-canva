import React from "react";
import ExportButton from "./ExportButton";
import PositionButton from "./PositionButton";
import { onDelete } from "./helpers";

const Header = ({ reset, ...props }) => {
  return (
    <div className="flex justify-between px-4 py-2 bg-white border-b">
      <div className="text-left flex-1"></div>
      <div className="flex-1 justify-center flex"></div>
      <div className="flex-1 text-right">
        {props.selectedIndex != undefined && (
          <>
            <PositionButton {...props} />
            <button
              className="px-4 py-2"
              onClick={onDelete(
                props.elements,
                props.setElements,
                props.selectedIndex,
                reset
              )}
            >
              Delete
            </button>
          </>
        )}
        <ExportButton {...props} />
      </div>
    </div>
  );
};
export default Header;
