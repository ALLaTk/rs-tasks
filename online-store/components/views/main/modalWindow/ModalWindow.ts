// localStore.getItems()

import './modalWindow.scss';

class ModalWindow {
  renderModalWindow(): void {
    const main = <HTMLElement>document.querySelector('main');
    const modal: HTMLDivElement = document.createElement('div');
    modal.className = 'modal__window';
    modal.innerHTML = 'Sorry, all slots are full';
    main.append(modal);
  }
}

export default ModalWindow;
