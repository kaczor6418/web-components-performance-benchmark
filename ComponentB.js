const template = document.createElement('template');
template.innerHTML = `
<h1>ComponentB</h1>
`;

export class ComponentB extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.append(template.content.cloneNode(true));
  }

  hello() {
    console.log('Hello');
  }
}

customElements.define('component-b', ComponentB);