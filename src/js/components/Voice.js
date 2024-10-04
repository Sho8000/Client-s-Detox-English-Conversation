import { Component } from "../common/component.js";

const Pictures = [
  "../resource/VoicePic1.png",
  "../resource/VoicePic2.png",
  "../resource/VoicePic3.png",
  "../resource/VoicePic4.png",
  "../resource/VoicePic5.png",
  "../resource/VoicePic6.png",
  "../resource/VoicePic7.png",
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

export class Voice extends Component{
  render(){

    const children = $(
      `<section id="Voice">
        <div class="VoiceCardContainer">
        </div>
      </section>`
    );

    for(let i=0;i<8;i++){
      let addVoiceCard = $(
        `<div class="VoiceCard">
          <div class="VoiceImg">
            <img src="${Pictures[i]}" alt="">
          </div>
          <div class="VoiceComment">
            <h2>${voiceTitle[i]}</h2>
            <p>${customerVoice[i]}</p>
          </div>
        </div>`
      );
      children.find(".VoiceCardContainer").append(addVoiceCard);
    }

    this.parentElement.append(children);

  }
}