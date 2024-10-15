import { Component } from "../common/component.js";
import { Pictures, voiceTitle, customerVoice } from "../common/Variable.js"

export class Voice extends Component{
  render(){

    const children = $(
      `<section id="Voice">
        <div class="VoiceCardContainer">
        </div>
      </section>`
    );

    if($("#app").hasClass("VoicePage")){
      console.log(Pictures[0].split(" "))
      console.log(Pictures[0])
      for(let i=0;i<8;i++){
        let addVoiceCard = "";
        let checkType = Pictures[i].split(" ")
        if(checkType[0] == "<iframe"){
          //For upload youtube "iframe" data
          addVoiceCard = $(
            `<div class="VoiceCard">
              <div class="VoiceYoutube">
                ${Pictures[i]}
              </div>
              <div class="VoiceComment">
                <h2>${voiceTitle[i]}</h2>
                <p>${customerVoice[i]}</p>
              </div>
            </div>`
          );  
        } else{
          //For upload picture "img" data
          addVoiceCard = $(
            `<div class="VoiceCard">
              <div class="VoiceYoutube">
                <img src="${Pictures[i]}" alt="">
              </div>
              <div class="VoiceComment">
                <h2>${voiceTitle[i]}</h2>
                <p>${customerVoice[i]}</p>
              </div>
            </div>`
          );
          }
      children.find(".VoiceCardContainer").append(addVoiceCard);
      }

      this.parentElement.append(children);
    }

  }
}