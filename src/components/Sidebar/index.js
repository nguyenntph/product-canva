import React, { useState } from "react";
import ElementList from "./ElementList";
import Uploader from "../Uploader";
import Shapes from "../Shapes";
import Text from "../Text";
import Size from "../Size";
import BackgroundLogo from "./assets/background.svg";
import ElementLogo from "./assets/element.svg";
import UploadLogo from "./assets/upload.svg";
import SizeLogo from "./assets/size.svg";
import ShapeLogo from "./assets/shapes.svg";
import TextLogo from "./assets/text.svg";

const categories = [
  {
    name: "Background",
    icon: BackgroundLogo
  },
  {
    name: "Elements",
    icon: ElementLogo
  },
  {
    name: "Upload",
    icon: UploadLogo
  },
  {
    name: "Text",
    icon: TextLogo
  },
  {
    name: "Shapes",
    icon: ShapeLogo
  },
  {
    name: "Size",
    icon: SizeLogo
  }
];

const Sidebar = ({ dragUrl, ...props }) => {
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
        {category == "Size" && <Size {...props} />}
        {category == "Shapes" && <Shapes />}
        {category == "Text" && <Text />}
      </div>
    </div>
  );
};

export default Sidebar;
