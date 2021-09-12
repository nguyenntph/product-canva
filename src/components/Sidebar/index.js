import React from "react";
import Header from "./Header";
import ElementList from "./ElementList";

const Sidebar = ({ switchConversation, currentElement }) => (
  <div className="h-full px-3">
    <Header />
    <ElementList
      switchConversation={switchConversation}
      currentElement={currentElement}
    />
  </div>
);

export default Sidebar;
