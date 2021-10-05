import React, { useState, useRef } from "react";
import { Stage, Layer, Group, Rect } from "react-konva";
import Element from "./Element";
import Header from "./Header";
import ResizeButton from "./ResizeButton";
import ElementMenu from "./ElementMenu";

const Canvas = ({ dragUrl, size }) => {
  const stageRef = useRef();
  const clipRef = useRef();
  const elementRef = useRef();
  const [elements, setElements] = useState([]);
  const [selectedId, selectShape] = useState(null);
  const [selectedIndex, setIndex] = useState(null);
  const [scale, setScale] = useState(0.5);
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
            (window.innerWidth * (3 / 4) - size["width"]) / 2,
          y:
            stageRef.current.getPointerPosition().y -
            (window.innerHeight - size["height"] * scale) / 2,
          src: dragUrl.current.src,
          id: Date.now().toString(),
          opacity: 1.0,
          isDragging: false
        }
      ])
    );
  };

  return (
    <div
      className="relative flex flex-col w-full h-full"
      onDrop={dropNewElement}
      onDragOver={e => {
        e.preventDefault();
      }}
    >
      <Header
        reset={reset}
        stageRef={clipRef}
        scale={scale}
        elements={elements}
        setElements={setElements}
        selectedIndex={selectedIndex}
        setIndex={setIndex}
      />
      <div className="overflow-scroll">
        <Stage
          width={window.innerWidth * (3 / 4)}
          height={window.innerHeight - 57}
          ref={stageRef}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
        >
          <Layer
            backgroundColor="white"
            width={size["width"]}
            height={size["height"]}
            x={(window.innerWidth * (3 / 4) - size["width"] * scale) / 2}
            y={(window.innerHeight - size["height"] * scale) / 2}
            scaleX={scale}
            scaleY={scale}
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
            {selectedId != null && <ElementMenu transformRef={elementRef} />}
          </Layer>
        </Stage>
      </div>

      <div className="absolute bottom-4 left-8">
        <ResizeButton scale={scale} setScale={setScale} />
      </div>
    </div>
  );
};

export default Canvas;
