import React, { useRef } from "react";
import ElementList from "../Sidebar/ElementList";
import Upload from "../../components/Sidebar/assets/upload.svg";

const Uploader = ({ data, upload, dragUrl }) => {
  const inputFile = useRef(null);
  return (
    <div className="h-full p-2">
      <div className="block">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full"
          onClick={() => {
            inputFile.current.click();
          }}
        >
          <div className="inline-flex">
            <img src={Upload} width="20" />
            <span className="ml-2">Upload</span>
          </div>
        </button>
      </div>
      <input
        ref={inputFile}
        id="uploader"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={e => {
          const file = e.target.files[0];
          const newImage = URL.createObjectURL(file);
          upload(
            data.concat([
              {
                id: Date.now().toString(),
                url: newImage,
                tags: ["uploads"]
              }
            ])
          );
        }}
      />
      <ElementList data={data} term="" dragUrl={dragUrl} />
    </div>
  );
};

export default Uploader;
