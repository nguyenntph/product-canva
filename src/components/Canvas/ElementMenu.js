import React from "react";
import { Transformer, Circle, Text, Group, Arrow } from "react-konva";

const ElementMenu = ({ transformRef, onDelete, goForward, goBackward }) => (
  <Transformer
    ref={transformRef}
    boundBoxFunc={(oldBox, newBox) => {
      // limit resize
      if (newBox.width < 5 || newBox.height < 5) {
        return oldBox;
      }
      return newBox;
    }}
  ></Transformer>
);
export default ElementMenu;
