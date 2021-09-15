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
  >
    <Group onClick={onDelete} zIndex={10000}>
      <Circle radius={10} fill="red" x={-20} y={0} />
      <Text text="x" x={-23.5} y={-6} fill="white" fontStyle="bold" />
    </Group>
    <Group onClick={goForward} zIndex={10000}>
      <Circle radius={10} fill="purple" x={-20} y={25} />
      <Arrow
        points={[7.5, 7.5, 7.5, 2.5]}
        x={-27}
        y={16.5}
        fill="white"
        stroke="white"
        strokeWidth={1}
      />
    </Group>
    <Group onClick={goBackward} zIndex={10000}>
      <Circle radius={10} fill="blue" x={-20} y={50} />
      <Arrow
        points={[2.5, 2.5, 2.5, 7.5]}
        x={-23}
        y={47.5}
        fill="white"
        stroke="white"
        strokeWidth={1}
      />
    </Group>
  </Transformer>
);
export default ElementMenu;
