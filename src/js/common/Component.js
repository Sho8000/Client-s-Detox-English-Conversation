export class Component {
  #parentElement;
  #props;
  #context;
  constructor(parentElement, props = {}, context = {}){
    this.#parentElement = parentElement;
    this.#props = props;
    this.#context = context;

    this.render();
  }

  get parentElement(){
    return this.#parentElement;
  }

  get props(){
    return this.#props;
  }

  get context(){
    return this.#context;
  }

  render(){
    throw new Error("All components must implement render method!");
  }
}