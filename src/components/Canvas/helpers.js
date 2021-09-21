export const onDelete = (elements, setElements, index, reset) => () => {
  const all = elements.slice();
  all.splice(index, 1);
  setElements(all);
  reset();
};

export const goForward = (elements, setElements, index, setIndex) => () => {
  if (index < elements.length - 1) {
    const all = elements.slice();
    const tmp = all[index];
    all[index] = all[index + 1];
    all[index + 1] = tmp;
    setElements(all);
    setIndex(index + 1);
  }
};

export const goBackward = (elements, setElements, index, setIndex) => () => {
  if (index > 0) {
    const all = elements.slice();
    const tmp = all[index];
    all[index] = all[index - 1];
    all[index - 1] = tmp;
    setElements(all);
    setIndex(index - 1);
  }
};

export const scale = (image, stage) => {
  if (image == undefined) return [0, 0];

  const width = image.width;
  const widthRatio = width / (stage.current.clipWidth() - 40);
  const height = image.height;
  const heightRatio = height / (stage.current.clipHeight() - 40);

  const ratio = Math.max(1, heightRatio, widthRatio);

  return [width / ratio, height / ratio];
};
