import { Component } from "../common/component.js";

export class About extends Component{
  render(){
    if($("#app").hasClass("AboutPage")){

      const children = $(
        `<h1>Hello</h1>`
      )

      this.parentElement.append(children)
    }
  }
}