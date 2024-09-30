import { Component } from "./common/component.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";

export class App extends Component{
  render(){
    new Header(this.parentElement);

    const children = $(
      `<main></main>`
    )
    this.parentElement.append(children)
    new Hero(children);

    new Footer(this.parentElement);
  }

}