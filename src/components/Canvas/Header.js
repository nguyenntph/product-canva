import React from "react";
import ExportButton from "./ExportButton";

const Header = ({ stageRef }) => (
  <div className="flex justify-between px-4 pt-3">
    <div className="text-left"></div>
    <div className="text-center"></div>
    <div className="text-right">
      <ExportButton stageRef={stageRef} />
    </div>
  </div>
);
export default Header;
