export const enableButton = (btns: HTMLButtonElement[]): void => {
  btns.forEach((btn) => {
    btn.disabled = false;
    btn.classList.remove('active');
  });
};

export const disableButton = (btns: HTMLButtonElement[]): void => {
  btns.forEach((btn) => {
    btn.disabled = true;
    btn.classList.add('active');
  });
};

export const getAllBtns = () => {
  const btnsRemove = <HTMLButtonElement[]>[...document.querySelectorAll('.remove-btn')];
  const btnsSelect = <HTMLButtonElement[]>[...document.querySelectorAll('.select-btn')];
  const btnsStart = <HTMLButtonElement[]>[...document.querySelectorAll('.start__btn')];
  const btnsPage = <HTMLButtonElement[]>[...document.querySelectorAll('.button__page')];
  const btnCreate = <HTMLButtonElement[]>[document.querySelector('.create__btn')];
  const btnUpdate = <HTMLButtonElement[]>[document.querySelector('.update__btn')];
  const btn100cars = <HTMLButtonElement[]>[document.querySelector('.control-line__generate')];
  const arrBtns = [btnsRemove, btnsSelect, btnsStart, btnsPage, btnCreate, btnUpdate, btn100cars];
  return arrBtns;
};
