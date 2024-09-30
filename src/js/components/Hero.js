import { Component } from "../common/component.js";

const BASE_CLASS = "hero";

let hero__title;
let Page;
if($("#app").hasClass("AboutPage")){
  hero__title = "自己紹介"
  Page = "AboutPage"
} else if($("#app").hasClass("VoicePage")){
  hero__title = "お客様の声"
  Page = "VoicePage"
} else if($("#app").hasClass("MenuPage")){
  hero__title = "メニュー"
  Page = "MenuPage"
} else if($("#app").hasClass("indexPage")){
  hero__title = "MainPage, Input something"
  Page = "IndexPage"
}

export class Hero extends Component{
  render(){
    const children = $(
      `<section id="heroSection">
        <div class="hero ${Page}__hero">
          <h1 class="hero__title">${hero__title}</h1>
        </div>
      </section>`
    )
    this.parentElement.append(children);
  }
}