import { Component } from "../common/component.js";
import { IndexContents, IndexYoutube, IndexSubbomment } from "../common/Variable.js";

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
            eachContents = $(
              `<swiper-container class="mySwiper" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true" slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100" coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true">
                <swiper-slide>
                  ${IndexYoutube[0]}
                  <div class="filterLeft"></div>
                  <div class="filterRight"></div>
                </swiper-slide>
                <swiper-slide>
                  ${IndexYoutube[1]}
                  <div class="filterLeft"></div>
                  <div class="filterRight"></div>
                </swiper-slide>
                <swiper-slide>
                  ${IndexYoutube[2]}
                  <div class="filterLeft"></div>
                  <div class="filterRight"></div>
                </swiper-slide>
              </swiper-container>`
              )
              children.find(".Youtube").append(eachContents)
            break;

          case "Maincomment":
            eachContents = $(
              `<div class="comments">
                <div class="mainComment">
                  <img src="resource/Group.png" alt="mainComment">
                </div>
                <div class="lineBtn">
                  <a href="${this.LineLink}"><button class="lineBtn"><p>LINEでご相談！</p></button></a></div>
              </div>
              <div class="mainPic">
                <img src="resource/Tsukamoto-san.png" alt="mainPic">
              </div>`
            )
            children.find(".Maincomment").append(eachContents)
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