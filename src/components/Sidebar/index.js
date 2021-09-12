import React from "react";
import Header from "./Header";
import ElementList from "./ElementList";

const Sidebar = ({ dragUrl }) => (
  <div className="h-full px-3 flex flex-col">
    <Header />
    <ElementList dragUrl={dragUrl} />
  </div>
);

export default Sidebar;
