import React from "react";

const Element = ({ element }) => (
  <div className="flex items-center p-3 cursor-pointer">
    <div className="pl-3 w-full">
      <div className="flex justify-center">
        <img src={element.url} />
      </div>
      <p className="font-semibold text-center">{element.name}</p>
    </div>
  </div>
);

export default Element;
