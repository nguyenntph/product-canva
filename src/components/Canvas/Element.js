import React, { useRef, useEffect, Fragment } from "react";
import { Image } from "react-konva";
import useImage from "use-image";
import { scale } from "./helpers";

const Element = ({
  isSelected,
  onSelect,
  onChange,
  element,
  canvas,
  elementRef,
  ...props
}) => {
  const shapeRef = useRef();
  const [image] = useImage(element.src, "Anonymous");
  const [width, height] = scale(image, canvas);

  useEffect(() => {
    if (isSelected) {
      elementRef.current.nodes([shapeRef.current]);
      elementRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <Fragment>
      <Image
        {...props}
        {...element}
        image={image}
        id={element.id}
        x={element.x}
        y={element.y}
        size={{ width: width, height: height }}
        offsetX={width / 2}
        offsetY={height / 2}
        isDragging={element.isDragging}
        draggable
        scaleX={element.isDragging ? 1.2 : 1}
        scaleY={element.isDragging ? 1.2 : 1}
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        onDragEnd={e => {
          onChange({
            ...element,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={() => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          onChange({
            ...element,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY)
          });
        }}
      />
    </Fragment>
  );
};

export default Element;
