import React from "react";
import ExportButton from "./ExportButton";

const Header = ({ stageRef }) => (
  <div className="flex justify-between px-4 pt-3">
    <div className="text-left flex-1"></div>
    <div className="flex-1 justify-center flex"></div>
    <div className="flex-1 text-right">
      <ExportButton stageRef={stageRef} />
    </div>
  </div>
);
export default Header;
