import React, { useState, useRef } from "react";
import { Stage, Layer, Group, Rect } from "react-konva";
import Element from "./Element";
import Header from "./Header";
import ElementMenu from "./ElementMenu";
import { onDelete, goForward, goBackward } from "./helpers";

const Canvas = ({ dragUrl }) => {
  const stageRef = useRef();
  const clipRef = useRef();
  const containerRef = useRef();
  const elementRef = useRef();
  const [elements, setElements] = useState([]);
  const [selectedId, selectShape] = useState(null);
  const [selectedIndex, setIndex] = useState(null);
  const [canvasSize, setCanvasSize] = useState({
    width: 700,
    height: 700
  });
  const reset = () => {
    setIndex(null);
    selectShape(null);
  };

  const checkDeselect = e => {
    const clickedOnEmpty = e.target === e.target.getStage();
    const clickOnBackground = e.target.attrs.id == "background";
    if (clickedOnEmpty || clickOnBackground) {
      selectShape(null);
    }
  };

  const dropNewElement = e => {
    e.preventDefault();
    stageRef.current.setPointersPositions(e);
    setElements(
      elements.concat([
        {
          x:
            stageRef.current.getPointerPosition().x -
            (window.innerWidth * (5 / 6) - canvasSize["width"]) / 2,
          y: stageRef.current.getPointerPosition().y - 7,
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
        stageRef={containerRef}
        canvasSize={canvasSize}
        setCanvasSize={setCanvasSize}
      />
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer
          backgroundColor="white"
          width={canvasSize["width"]}
          ref={containerRef}
          height={canvasSize["height"]}
        >
          <Group
            x={(window.innerWidth * (5 / 6) - canvasSize["width"]) / 2}
            y={7}
            clip={{
              x: 0,
              y: 0,
              width: canvasSize["width"],
              height: canvasSize["height"]
            }}
            fill="white"
            ref={clipRef}
          >
            <Rect
              id="background"
              x={0}
              y={0}
              width={canvasSize["width"]}
              height={canvasSize["height"]}
              fill="white"
              onSelect={() => {
                alert(1);
                selectShape(null);
                setIndex(null);
              }}
            ></Rect>
            {elements.map((element, index) => (
              <Element
                elementRef={elementRef}
                canvasSize={canvasSize}
                key={element.id}
                id={element.id}
                canvas={clipRef}
                element={element}
                isSelected={element.id === selectedId}
                onSelect={() => {
                  selectShape(element.id);
                  setIndex(index);
                }}
                onChange={newAttrs => {
                  const all = elements.slice();
                  all[index] = newAttrs;
                  setElements(all);
                }}
              />
            ))}
          </Group>
        </Layer>
        <Layer width={canvasSize["width"]} height={canvasSize["height"]}>
          {selectedId != null && (
            <ElementMenu
              transformRef={elementRef}
              onDelete={onDelete(elements, setElements, selectedIndex, reset)}
              goForward={goForward(elements, setElements, selectedIndex, setIndex)}
              goBackward={goBackward(elements, setElements, selectedIndex, setIndex)}
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
