import { Component } from "../common/component.js";
import { IndexContents } from "../common/Variable.js";

const BASE_CLASS = "indexPage";

export class Index extends Component{
  render(){
    if($("#app").hasClass("indexPage")){
      //add section container
      const children = $(
        `<section id="${BASE_CLASS}__contents">
          <div class="${BASE_CLASS}__container">
          </div>
        </section>`
      )
      for(let i=0;i<IndexContents.length;i++){
      //add each section contents
      let odd = "";
        if(i%2===0){
          odd = "odd";
        }
        const eachSections = $(
          `<div class="${BASE_CLASS}__items ${IndexContents[i]} ${odd}"></div>`
        )

        children.find(`.${BASE_CLASS}__container`).append(eachSections)
      }
 
      this.parentElement.append(children);
    }
  }
}