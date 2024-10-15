import { Component } from "../common/component.js";
import { Pictures, voiceTitle, customerVoice } from "../common/Variable.js"

/* const Pictures = [
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/yLFTjinxeHg?si=WEMLY88Fzu5uZcLS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/ivwPWI8w6RA?si=2lXD5crW9yAi6pD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/5_HuhAKKtCg?si=EyMMkVjFpertQmZm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/uq4SHpbhPLU?si=6fzfkoHgcC0klacG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/ghzjtepxbhE?si=zsR7D-4O74vG1_R2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/XVv0xnIhaRA?si=DpbNbBhIjEArRZl0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/dfyB0Pyxo14?si=k7MwICbhFP1UfR-x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  "../resource/VoicePic8.png"
];
 
const voiceTitle = [
  "4人のママで電気工事現場監督（神奈川）",
  "アパレルデザイナー & スタイリスト（京都＆広島）",
  "ピラティススタジオ経営（福岡）",
  "ラーメン店４店舗経営ご夫婦（東京）",
  "EC販売代行（神奈川）",
  "パティスリー経営（熊本）",
  "リンパマッサージサロン経営（東京）",
  "お花屋さん（熊本）"
]
const customerVoice = [
  "子育て真っ最中だが、次の人生に踏み出そうと英語を開始！一緒に渡豪もし、どんどん才能開花中！",
  "とにかく何か踏み出したい！ということで英語を始めたら、転職が起こるわ息子も英語が話せるようになるわミラクルいっぱいです！",
  "英語が全く聞こえなかったのが１ヶ月で聞こえるようになった。毎日が海外で生活しているようだった。",
  "",
  "",
  "",
  "",
  "高校時代から嫌いなままだったが、英語のでのチャットやヴォイスメッセージを自然に送れるようになった。"
]
*/

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