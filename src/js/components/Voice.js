import { Component } from "../common/component.js";
import { Pictures, voiceTitle, customerVoice, googleReviews } from "../common/Variable.js"

export class Voice extends Component{
  render(){

    const children = $(
      `<section id="Voice">
        <div class="VoiceCardContainer">
        </div>
        <div class="GoogleReview">
          <h3 class="GoogleReviewTitle">Google レビュー</h3>
          <div class="GoogleReviewContainer"></div>
          <div class="showMore">
          <a href="${this.GoogleReview}"><button class="showMoreBtn"><p class="font_p_L fontWaitBold">もっと見る</p></button></a>
          </div>
        </div>
      </section>`
    );

    if($("#app").hasClass("VoicePage")){
      //Voice Part
      for(let i=0;i<Pictures.length;i++){
        let addVoiceCard = "";
        let checkType = Pictures[i].split(" ")
        if(checkType[0] === "<iframe"){
          //For upload youtube "iframe" data
          addVoiceCard = $(
            `<div class="VoiceCard">
              <div class="VoiceComment">
                <p class="font_p_L fontWaitBold">${voiceTitle[i]}</p>
              </div>
              <div class="VoiceYoutube">
                ${Pictures[i]}
              </div>
              <div class="VoiceComment">
                <p class="font_p_m fontWaitBold">${customerVoice[i]}</p>
              </div>
            </div>`
          );  
        } else{
          //For upload picture "img" data
          addVoiceCard = $(
            `<div class="VoiceCard">
              <div class="VoiceComment">
                <p class="font_p_L fontWaitBold">${voiceTitle[i]}</p>
              </div>
              <div class="VoiceYoutube">
                <img src="${Pictures[i]}" alt="">
              </div>
              <div class="VoiceComment">
                <p class="font_p_m fontWaitBold">${customerVoice[i]}</p>
              </div>
            </div>`
          );
        }
      children.find(".VoiceCardContainer").append(addVoiceCard);
      }

      //Voice Part
      for(let i=0;i<googleReviews.length;i++){
        const addGoogleReview = $(
          `<div class="VoiceCard">
            <div class="VoiceYoutube">
              <img src="${googleReviews[i]}" alt="review">
            </div>
          </div>`
        );
        children.find(".GoogleReviewContainer").append(addGoogleReview);
      }


      this.parentElement.append(children);
    }

  }
}