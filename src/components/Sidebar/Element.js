import React from "react";

const Element = ({ element, ...others }) => (
  <div className="flex items-center p-3 cursor-pointer" {...others}>
    <div className="pl-3 w-full">
      <div className="flex justify-center">
        <img src={element.url} data-id={element.id} />
      </div>
      <p className="font-semibold text-center">{element.name}</p>
    </div>
  </div>
);

export default Element;
