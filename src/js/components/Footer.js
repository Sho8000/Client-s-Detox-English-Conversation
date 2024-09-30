import { Component } from "../common/component.js";

const BASE_CLASS = "footer"
let IndexHTML
let AboutHTML
let MenuHTML
let VoiceHTML
let facebookIcon
let instagramIcon
let youtubeIcon
if($("#app").hasClass(".indexPage")){
  IndexHTML = "index.html";
  AboutHTML = "pages/About.html";
  MenuHTML = "pages/Menu.html";
  VoiceHTML = "pages/Voice.html";
  facebookIcon = "resource/facebook.png";
  instagramIcon = "resource/instagram.png";
  youtubeIcon = "resource/youtube.png";
} else{
  IndexHTML = "../index.html";
  AboutHTML = "../pages/About.html";
  MenuHTML = "../pages/Menu.html";
  VoiceHTML = "../pages/Voice.html";
  facebookIcon = "../resource/facebook.png";
  instagramIcon = "../resource/instagram.png";
  youtubeIcon = "../resource/youtube.png";
}


export class Footer extends Component{
  render(){
    let children;
      children = $(
        `<footer id="${BASE_CLASS}">
          <div class="${BASE_CLASS}__container">
            <h2 class="${BASE_CLASS}__title">AKIF Airways.</h2>
            <div class="${BASE_CLASS}__ulContainer">
              <ul class="${BASE_CLASS}__ul">
                <li class="${BASE_CLASS}__li"><a href="${IndexHTML}">Home</a></li>
                <li class="${BASE_CLASS}__li"><a href="${MenuHTML}">Menu</a></li>
                <li class="${BASE_CLASS}__li"><a href="${VoiceHTML}">Voice</a></li>
                <li class="${BASE_CLASS}__li"><a href="${AboutHTML}">About</a></li>
              </ul>
            </div>
            <div class="${BASE_CLASS}__icons">
              <div><a href="https://www.facebook.com/AQUIXXX?mibextid=ZbWKwL"><img src="${facebookIcon}" alt="facebook"></a></div>
              <div><a href="https://www.instagram.com/akifumitsukamoto777/?igsh=emkyOW1tdmpsencw&utm_source=qr"><img src="${instagramIcon}" alt="instagram"></a></div>
              <div><a href="https://m.youtube.com/user/youtsubeful"><img src="${youtubeIcon}" alt="youtube"></a></div>  
            </div>
          </div>
        </footer>`
      )
    this.parentElement.append(children)
  }
}
