export const onDelete = (elements, setElements, index) => () => {
  const all = elements.slice();
  all.splice(index, 1);
  setElements(all);
};

export const goForward = (elements, setElements, index) => () => {
  if (index < elements.length - 1) {
    const all = elements.slice();
    const tmp = all[index];
    all[index] = all[index + 1];
    all[index + 1] = tmp;
    setElements(all);
  }
};

export const goBackward = (elements, setElements, index) => () => {
  if (index > 0) {
    const all = elements.slice();
    const tmp = all[index];
    all[index] = all[index - 1];
    all[index - 1] = tmp;
    setElements(all);
  }
};

export const scale = (image, stage) => {
  if (image == undefined) return [0, 0];

  const width = image.width;
  const widthRatio = width / (stage.current.width() - 40);
  const height = image.height;
  const heightRatio = height / (stage.current.height() - 40);

  const ratio = Math.max(1, heightRatio, widthRatio);

  return [width / ratio, height / ratio];
};
