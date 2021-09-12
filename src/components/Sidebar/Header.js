import React from "react";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => (
  <>
    <div className="flex itesms-center justify-between p-3">
      <div className="flex items-center">
        <h1
          className="font-black text-2xl ml-2 text-black"
          style={{ fontFamily: "Helvetica Neue" }}
        >
          Elements
        </h1>
      </div>
      <div>
        <button className="rounded-full w-10 h-10 bg-gray-200 mx-1">
          <FontAwesomeIcon icon="cog" />
        </button>
      </div>
    </div>
    <SearchBar />
  </>
);

export default Header;
