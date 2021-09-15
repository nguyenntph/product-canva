import React from "react";

const SearchBar = ({ search }) => (
  <input
    className="rounded-full bg-gray-200 w-full px-3 py-2 my-3 outline-none"
    type="text"
    placeholder="Search"
    //TODO: Debounce
    onChange={e => search(e.target.value)}
  />
);

export default SearchBar;
