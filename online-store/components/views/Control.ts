class Control {
  element: HTMLElement;

  mainContent: HTMLElement;

  node!: { remove: () => void };

  constructor(parent: HTMLElement, tag: string, name: string) {
    this.element = document.createElement(tag);
    this.element.className = name;
    parent.append(this.element);
    this.mainContent = document.createElement('main');
    this.mainContent.className = 'main';
  }

  destroy(): void {
    this.node.remove();
  }
}

export default Control;
