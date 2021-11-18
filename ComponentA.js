const template = `
<h1>ComponentA</h1>
`;

export class ComponentA extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.innerHTML = template;
  }

}

customElements.define('component-a', ComponentA);