import React from "react";
import data from "../../../data/elements.json";
import SearchBar from "./SearchBar";
import Element from "./Element";

const ElementList = () => (
  <div className="overflow-y-auto h-full pt-0">
    <SearchBar />
    {data.map(element => (
      <Element key={element.id} element={element} />
    ))}
  </div>
);

export default ElementList;
