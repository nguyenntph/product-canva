import React from "react";
import data from "../../../data/elements.json";
import Element from "./Element";

const ElementList = ({ dragUrl }) => (
  <div className="overflow-y-auto h-full pt-0">
    {data.map(element => (
      <Element
        key={element.id}
        element={element}
        draggable="true"
        onDragStart={e => {
          dragUrl.current = { src: e.target.src, id: e.target.dataset.id };
        }}
      />
    ))}
  </div>
);

export default ElementList;
