import React, { useState, useRef } from "react";
import { Stage, Layer, Group, Rect } from "react-konva";
import Element from "./Element";
import Header from "./Header";
import ResizeButton from "./ResizeButton";
import ElementMenu from "./ElementMenu";
import { onDelete, goForward, goBackward } from "./helpers";

const Canvas = ({ dragUrl, size }) => {
  const stageRef = useRef();
  const clipRef = useRef();
  const containerRef = useRef();
  const elementRef = useRef();
  const [elements, setElements] = useState([]);
  const [selectedId, selectShape] = useState(null);
  const [selectedIndex, setIndex] = useState(null);
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
            (window.innerWidth * (5 / 6) - size["width"]) / 2,
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
      className="relative"
      onDrop={dropNewElement}
      onDragOver={e => {
        e.preventDefault();
      }}
    >
      <Header stageRef={clipRef} />
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer
          backgroundColor="white"
          width={size["width"]}
          height={size["height"]}
          ref={containerRef}
          x={(window.innerWidth * (5 / 6) - size["width"]) / 2}
          y={7}
          scaleX={0.5}
          scaleY={0.5}
        >
          <Group
            width={size["width"]}
            height={size["height"]}
            clip={{
              x: 0,
              y: 0,
              width: size["width"],
              height: size["height"]
            }}
            fill="white"
            ref={clipRef}
          >
            <Rect
              id="background"
              x={0}
              y={0}
              width={size["width"]}
              height={size["height"]}
              fill="white"
              onSelect={() => {
                selectShape(null);
                setIndex(null);
              }}
            ></Rect>
            {elements.map((element, index) => (
              <Element
                elementRef={elementRef}
                size={size}
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
        <Layer width={size["width"]} height={size["height"]}>
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

      <div className="absolute bottom-20 left-8">
        <ResizeButton />
      </div>
    </div>
  );
};

export default Canvas;
