import React, { useState } from "react";
import ElementList from "./ElementList";
import Uploader from "../Uploader";
import Background from "./assets/background.svg";
import Element from "./assets/element.svg";
import Upload from "./assets/upload.svg";
import Size from "./assets/size.svg";

const categories = [
  {
    name: "Background",
    icon: Background
  },
  {
    name: "Elements",
    icon: Element
  },
  {
    name: "Upload",
    icon: Upload
  },
  {
    name: "Size",
    icon: Size
  }
];

const Sidebar = ({ dragUrl }) => {
  const [category, selectCategory] = useState("Elements");
  const [uploads, uploadNewImage] = useState([]);

  return (
    <div className="h-full flex">
      <div className="flex-none border-r text-xs text-center ">
        {categories.map(({ name, icon }) => (
          <div
            className={`active:bg-gray-300 hover:bg-gray-300 cursor-pointer p-1 ${name ===
              category && "bg-gray-300"}`}
            key={name}
            onClick={() => selectCategory(name)}
            style={{ height: 75, width: 75, paddingTop: "20%" }}
          >
            <img src={icon} width="30" height="30" className="m-auto" />
            {name}
          </div>
        ))}
      </div>

      <div className="flex-1 border-r">
        {category == "Elements" && <ElementList dragUrl={dragUrl} term={""} />}
        {category == "Upload" && (
          <Uploader data={uploads} upload={uploadNewImage} dragUrl={dragUrl} term={""} />
        )}
        {category == "Background" && (
          <ElementList dragUrl={dragUrl} term={"background"} />
        )}
        {category == "Size" && <img src={Size} />}
      </div>
    </div>
  );
};

export default Sidebar;
