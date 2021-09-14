import React, { useRef, useEffect, Fragment } from "react";
import { Image, Transformer } from "react-konva";
import useImage from "use-image";

const Element = ({ isSelected, onSelect, onChange, element }) => {
  const shapeRef = useRef();
  const trRef = useRef();
  const [image] = useImage(element.src, "Anonymous");

  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <Fragment>
      <Image
        image={image}
        id={element.id}
        x={element.x}
        y={element.y}
        offsetX={image ? image.width / 2 : 0}
        offsetY={image ? image.height / 2 : 0}
        isDragging={element.isDragging}
        draggable
        shadowColor="black"
        shadowBlur={10}
        shadowOpacity={0.6}
        shadowOffsetX={element.isDragging ? 10 : 5}
        shadowOffsetY={element.isDragging ? 10 : 5}
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
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </Fragment>
  );
};

export default Element;
