import React, { useState, useRef } from "react";
import { Stage, Layer } from "react-konva";
import Element from "./Element";
import Header from "./Header";
import { onDelete, goForward, goBackward } from "./helpers";

const Canvas = ({ dragUrl }) => {
  const stageRef = useRef();
  const [elements, setElements] = useState([]);
  const [selectedId, selectShape] = useState(null);
  const [canvasSize, setCanvasSize] = useState({
    width: 700,
    height: 700
  });

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
          id: Date.now().toString(),
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
      <Header
        stageRef={stageRef}
        canvasSize={canvasSize}
        setCanvasSize={setCanvasSize}
        reset={() => selectShape(null)}
      />
      <Stage
        width={canvasSize["width"]}
        height={canvasSize["height"]}
        className="mx-4 my-2"
        ref={stageRef}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          {elements.map((element, index) => (
            <Element
              key={element.id}
              id={element.id}
              canvas={stageRef}
              element={element}
              isSelected={element.id === selectedId}
              onSelect={() => {
                selectShape(element.id);
              }}
              onChange={newAttrs => {
                const all = elements.slice();
                all[index] = newAttrs;
                setElements(all);
              }}
              onDelete={onDelete(elements, setElements, index)}
              goForward={goForward(elements, setElements, index)}
              goBackward={goBackward(elements, setElements, index)}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
