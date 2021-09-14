import React, { useState, useRef } from "react";
import { Stage, Layer } from "react-konva";
import Element from "./Element";
import ExportButton from "./ExportButton";

const Canvas = ({ dragUrl }) => {
  const stageRef = useRef();
  const [elements, setElements] = useState([]);
  const [selectedId, selectShape] = useState(null);

  const checkDeselect = e => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  const dropNewElement = e => {
    e.preventDefault();
    stageRef.current.setPointersPositions(e);
    setElements(
      elements.concat([
        {
          ...stageRef.current.getPointerPosition(),
          src: dragUrl.current.src,
          id: dragUrl.current.id,
          isDragging: false
        }
      ])
    );
  };

  return (
    <div
      onDrop={dropNewElement}
      onDragOver={e => {
        e.preventDefault();
      }}
    >
      <div className="text-right px-4 pt-3">
        <ExportButton stageRef={stageRef} />
      </div>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight - 80}
        className="flex overflow-hidden mx-4 my-2 bg-white"
        ref={stageRef}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          {elements.map((element, index) => (
            <Element
              key={index}
              id={element.id}
              element={element}
              isSelected={index === selectedId}
              onSelect={() => {
                selectShape(index);
              }}
              onChange={newAttrs => {
                const all = elements.slice();
                all[index] = newAttrs;
                setElements(all);
              }}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
