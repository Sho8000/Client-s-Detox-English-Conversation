import { Component } from "../common/component.js";

const BASE_CLASS = "header"
let IndexHTML
let AboutHTML
let MenuHTML
let VoiceHTML
let BlogHTML
let facebookIcon
let instagramIcon
let youtubeIcon
if($("#app").hasClass("indexPage")){
  IndexHTML = "index.html";
  AboutHTML = "pages/About.html";
  MenuHTML = "pages/Menu.html";
  VoiceHTML = "pages/Voice.html";
  BlogHTML = "pages/Blog.html";
  facebookIcon = "resource/facebook.png";
  instagramIcon = "resource/instagram.png";
  youtubeIcon = "resource/youtube.png";
} else{
  IndexHTML = "../index.html";
  AboutHTML = "../pages/About.html";
  MenuHTML = "../pages/Menu.html";
  VoiceHTML = "../pages/Voice.html";
  BlogHTML = "../pages/Blog.html";
  facebookIcon = "../resource/facebook.png";
  instagramIcon = "../resource/instagram.png";
  youtubeIcon = "../resource/youtube.png";
}

export class Header extends Component{
  render(){
    const children = $(

      `<header id="${BASE_CLASS}">
      <div class="${BASE_CLASS}__icons__area">
        <div class="${BASE_CLASS}__icons">
          <div><a href="${this.FacebookLink}"><img src="${facebookIcon}" alt="facebook"></a></div>
          <div><a href="${this.InstagramLink}"><img src="${instagramIcon}" alt="instagram"></a></div>
          <div><a href="${this.YoutubeLink}"><img src="${youtubeIcon}" alt="youtube"></a></div>  
        </div>
      </div>
      <nav class="${BASE_CLASS}__nav__PC">
        <h1 class="${BASE_CLASS}__title">AKIF Airways.</h1>
        <div class="${BASE_CLASS}__ulContainer">
          <ul class="${BASE_CLASS}__ul">
            <li class="${BASE_CLASS}__li"><a href="${IndexHTML}">Home</a></li>
            <li class="${BASE_CLASS}__li"><a href="${MenuHTML}">Menu</a></li>
            <li class="${BASE_CLASS}__li"><a href="${VoiceHTML}">Voice</a></li>
            <li class="${BASE_CLASS}__li"><a href="${AboutHTML}">About</a></li>
            <li class="${BASE_CLASS}__li"><a href="${BlogHTML}">Blog</a></li>
            <li class="${BASE_CLASS}__li"><a href="${this.LineLink}"><button class="${BASE_CLASS}__li__LINE"><p>LINEでご相談！</p></button></a></li>
          </ul>
        </div>
      </nav>
    </header>`
    )

    this.parentElement.append(children);
  }

}