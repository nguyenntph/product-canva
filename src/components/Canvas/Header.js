import React from "react";
import ExportButton from "./ExportButton";
import PositionButton from "./PositionButton";
import { onDelete } from "./helpers";

const Header = ({ reset, ...props }) => {
  const disabled = props.selectedIndex == undefined;
  return (
    <div className="flex justify-between px-4 py-2 bg-white border-b">
      <div className="text-left flex-1"></div>
      <div className="flex-1 justify-center flex"></div>
      <div className="flex-1 text-right">
        <PositionButton {...props} disabled={disabled} />
        <button
          className={`px-4 py-2 ${disabled && "cursor-not-allowed"}`}
          onClick={onDelete(
            props.elements,
            props.setElements,
            props.selectedIndex,
            reset
          )}
          disabled={disabled}
        >
          Delete
        </button>
        <ExportButton {...props} />
      </div>
    </div>
  );
};
export default Header;
