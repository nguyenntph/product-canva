import React from "react";

const ExportButton = ({ stageRef }) => {
  const downloadURI = (uri, name) => {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateImage = () => {
    const uri = stageRef.current.toDataURL();
    downloadURI(uri, "portfo-canva-" + Date.now() + ".png");
  };

  return (
    <button
      onClick={generateImage}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Export
    </button>
  );
};

export default ExportButton;
