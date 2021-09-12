import React from "react";
import data from "../../../data/elements.json";
import Element from "./Element";

const ElementList = ({ dragUrl }) => (
  <div className="overflow-y-auto h-full pt-0">
    {data.map(element => (
      <Element
        key={element.name}
        element={element}
        draggable="true"
        onDragStart={e => {
          dragUrl.current = e.target.src;
        }}
      />
    ))}
  </div>
);

export default ElementList;
