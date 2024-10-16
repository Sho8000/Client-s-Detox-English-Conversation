import { Component } from "../common/component.js";
import { IndexContents, IndexSubbomment } from "../common/Variable.js";

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

        //add each content
        let eachContents;
        switch (IndexContents[i]) {
          case "Youtube":
            
            break;

          case "Maincomment":
            
            break;

          case "Course":
            
            break;

          case "Subcomment":
            eachContents = $(
              `<div class="SubcommentContainer">
                <div class="comments">
                  <h2>${IndexSubbomment[0]}</h2>
                  <p>${IndexSubbomment[1]}</p>
                </div>
                <div class="images">
                  <img src="resource/Banana-bud.png" alt="" class="Banana">
                </div>
              </div>`
            )
            children.find(".Subcomment").append(eachContents)
            break;

          case "Voice":
            
            break;

          default:
            break;
        }
      }

      this.parentElement.append(children);
    }
  }
}