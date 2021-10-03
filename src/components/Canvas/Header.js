import React from "react";
import ExportButton from "./ExportButton";

const Header = props => (
  <div className="flex justify-between px-4 py-2 bg-white border-b">
    <div className="text-left flex-1"></div>
    <div className="flex-1 justify-center flex"></div>
    <div className="flex-1 text-right">
      <ExportButton {...props} />
    </div>
  </div>
);
export default Header;
