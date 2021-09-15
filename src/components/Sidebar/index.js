import React, { useState } from "react";
import Header from "./Header";
import ElementList from "./ElementList";

const Sidebar = ({ dragUrl }) => {
  const [term, search] = useState("");

  return (
    <div className="h-full px-3 flex flex-col">
      <Header search={search} />
      <ElementList dragUrl={dragUrl} term={term} />
    </div>
  );
};

export default Sidebar;
