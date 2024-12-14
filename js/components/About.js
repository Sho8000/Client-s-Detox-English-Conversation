import { Component } from "../common/component.js";
import { BananaPic, textTitle, textContent, aboutPics, aboutYoutube, textClassName, textIdName } from "../common/Variable.js";

export class About extends Component{
  render(){
    if($("#app").hasClass("AboutPage")){

      const children = $(
        `<section id="About">
          <div class="aboutFlexContainer">
          </div>
          <div class="aboutYoutubeContainer">
            <div class="youtubeTitle">${BananaPic[5]}<p class="font_p_xl fontWaitBold">Youtube チャンネル</p></div>
            <div class="youtubeArea"></div>
            <div class="youtubeLink">
              <a href="${this.YoutubeLink}"><button class="youtubeBtn font_p_m fontWaitBold">Youtube チャンネルはこちら</button></a>
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
          `<div class="aboutFlex ${odd} ${textClassName[i]}" id="${textIdName[i]}">
            <div class="text">
              <p class="font_p_xl fontWaitBold">${textTitle[i]}</p>
              <p class="font_p_m fontWaitBoldNormal">${textContent[i]}</p>
            </div>
            <div class="pic">
              <img src=${aboutPics[i]} alt="">
            </div>
          </div>`
        )
        children.find(".aboutFlexContainer").append(addAboutFlexContainer);
      }

      //add Banana Pics
      children.find(".aboutThoughtRoot").append(`<div class="Banana">${BananaPic[1]}</div>`)

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