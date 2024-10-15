import { Component } from "../common/component.js";
import { textTitle, textContent, aboutPics, aboutYoutube } from "../common/Variable.js";

export class About extends Component{
  render(){
    if($("#app").hasClass("AboutPage")){

      const children = $(
        `<section id="About">
          <div class="aboutFlexContainer">
          </div>
          <div class="aboutYoutubeContainer">
            <div class="youtubeTitle"><h2>Youtube チャンネル</h2></div>
            <div class="youtubeArea"></div>
            <div class="youtubeLink">
              <a href="${this.YoutubeLink}"><button class="youtubeBtn">Youtube チャンネルはこちら</button></a>
            </div>
          </div>
        </section>`
      )
      //add AboutMe Main part
      for(let i=0; i<textTitle.length;i++){  
        let odd = "";
        if(i%2===1){
          odd = "odd";
        }
        let addAboutFlexContainer = $(
          `<div class="aboutFlex ${odd}">
            <div class="text">
              <h2>${textTitle[i]}</h2>
              <p>${textContent[i]}</p>
            </div>
            <div class="pic">
              <img src=${aboutPics[i]} alt="">
            </div>
          </div>`
        )
        children.find(".aboutFlexContainer").append(addAboutFlexContainer);
      }

      //Youtube channel
      for(let i=0; i<aboutYoutube.length; i++){
        let YoutubeChannel = $(
          `${aboutYoutube[i]}`
        )
        children.find(".youtubeArea").append(YoutubeChannel);
      }
      this.parentElement.append(children)

    }
  }
}