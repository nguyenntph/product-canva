export const onDelete = (elements, setElements, index) => () => {
  const all = elements.slice();
  all.splice(index);
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
