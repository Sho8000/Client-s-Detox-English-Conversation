import { Component } from "../common/component.js";

const BASE_CLASS = "footer"

export class Footer extends Component{
  render(){
    const children = $(
      `<footer id="${BASE_CLASS}">
        <div class="${BASE_CLASS}__container">
          <h2 class="${BASE_CLASS}__title">AKIF Airways.</h2>
          <div class="${BASE_CLASS}__ulContainer">
            <ul class="${BASE_CLASS}__ul">
              <li class="${BASE_CLASS}__li"><a href="index.html">Home</a></li>
              <li class="${BASE_CLASS}__li"><a href="pages/Menu.html">Menu</a></li>
              <li class="${BASE_CLASS}__li"><a href="pages/Voice.html">Voice</a></li>
              <li class="${BASE_CLASS}__li"><a href="pages/About.html">About</a></li>
            </ul>
          </div>
          <div class="${BASE_CLASS}__icons">
            <div><a href="https://www.facebook.com/AQUIXXX?mibextid=ZbWKwL"><img src="resource/facebook.png" alt="facebook"></a></div>
            <div><a href="https://www.instagram.com/akifumitsukamoto777/?igsh=emkyOW1tdmpsencw&utm_source=qr"><img src="resource/instagram.png" alt="instagram"></a></div>
            <div><a href="https://m.youtube.com/user/youtsubeful"><img src="resource/youtube.png" alt="youtube"></a></div>  
          </div>
        </div>
      </footer>`
    )
    this.parentElement.append(children)
  }
}
