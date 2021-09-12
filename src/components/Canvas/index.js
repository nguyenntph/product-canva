import React, { useState, useRef } from "react";
import { Stage, Layer } from "react-konva";
import URLImage from "./UrlImage";

const Canvas = ({ dragUrl }) => {
  const [elements, setElements] = useState([]);
  const stageRef = useRef();

  const handleDragStart = e => {
    const id = e.target.id();
    setElements(
      elements.map(element => {
        return {
          ...element,
          isDragging: element.id === id
        };
      })
    );
  };
  const handleDragEnd = e => {
    setElements(
      elements.map(element => {
        return {
          ...element,
          isDragging: false
        };
      })
    );
  };

  const dropNewElement = e => {
    e.preventDefault();
    // register event position
    stageRef.current.setPointersPositions(e);
    // add image
    setElements(
      elements.concat([
        {
          ...stageRef.current.getPointerPosition(),
          src: dragUrl.current,
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
      <Stage
        width={window.innerWidth}
        height={window.innerHeight - 60}
        className="flex overflow-hidden m-10 mb-2 bg-white"
        ref={stageRef}
      >
        <Layer>
          {elements.map(element => (
            <URLImage
              key={element.src}
              id={element.src}
              image={element}
              draggable
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.6}
              shadowOffsetX={element.isDragging ? 10 : 5}
              shadowOffsetY={element.isDragging ? 10 : 5}
              scaleX={element.isDragging ? 1.2 : 1}
              scaleY={element.isDragging ? 1.2 : 1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
