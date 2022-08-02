export const createDivElement = (className: string): HTMLDivElement => {
  const divElem: HTMLDivElement = document.createElement('div');
  divElem.className = className;
  return divElem;
};

export const createButton = (className: string, inner: string): HTMLButtonElement => {
  const button: HTMLButtonElement = document.createElement('button');
  button.className = className;
  button.innerHTML = inner;
  return button;
};

export const createInput = (value: string, className: string, type: string, name: string): HTMLInputElement => {
  const input: HTMLInputElement = document.createElement('input');
  input.value = value;
  input.className = className;
  input.type = type;
  input.name = name;
  return input;
};
