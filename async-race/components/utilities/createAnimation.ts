import { ObjectValue } from './interface';

export const idAnimation: ObjectValue<number> = {};

export const createAnimation = (
  carElement: HTMLDivElement,
  velocity: number,
  distance: number
): ObjectValue<number> => {
  const requestID: ObjectValue<number> = {};
  let startValue: number | null = null;
  const timeAnimation: number = distance / velocity;
  const gap: number = Math.floor(document.body.getBoundingClientRect().width) - 200;

  const step = (timeStep: number): void => {
    if (!startValue) startValue = timeStep;
    const time: number = timeStep - startValue;
    const pas: number = Math.round(time * (gap / timeAnimation));
    carElement.style.transform = `translateX(${Math.min(pas, gap)}px)`;
    if (pas < gap) {
      requestID.id = window.requestAnimationFrame(step);
      idAnimation.id = requestID.id;
    }
  };
  requestID.id = window.requestAnimationFrame(step);
  idAnimation.id = requestID.id;
  return requestID;
};
