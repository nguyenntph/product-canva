import React from "react";
import defaultData from "../../../data/elements.json";
import Element from "./Element";

const filter = (data, term) => {
  const filtered = data.filter(element => element.tags.includes(term));
  if (filtered.length == 0) {
    return data;
  }
  return filtered;
};

const ElementList = ({ dragUrl, term, data = defaultData }) => (
  <div className="overflow-y-auto h-full pt-0">
    {filter(data, term).map(element => (
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
