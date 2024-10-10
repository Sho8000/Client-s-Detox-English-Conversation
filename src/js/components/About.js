import { Component } from "../common/component.js";

const textTitle = ["Akiちゃん","CAライフ"];
const textContent = [`こんにちは、あきちゃんです
              私は九州の城下町、熊本で魚屋の両親の元に次男（？）、長女（？）として生まれました。
              ま、幼少期から男の子が好きだった訳なんですね。
              小さい時から、植物と飛行機と英語が好きで、好きが嵩じて、園芸店で働いたり、CAになったり、英会話コーチをやって来ました。
              プライベートでは妊活中でして、女性カップルに精子提供をすることで新しい形の家族を作ろうと奮闘しています。
              そんなカラフルでモザイクな感じの私がみなさんに提供しているのが
              「呪いから解放」するセッションです。
              興味がある人はまず連絡してみてくださいね！`,`中でも最もexcitingだったのはCAライフ（実際はキャビンクルーと呼びます）ですね。タイの航空会社とドバイの航空会社に居ましたが、日々、世界１４０都市をまたにかける生活でした。
              海外はドバイ、バンコク、シドニー、ロンドン、パリと住んできまして、フランス語やタイ語を含む４か国語を話します。今はアラビア語の習得に向けて励んでいます。`];
const aboutPics = ["../resource/Akifumi-thailand.png","../resource/CA2.png"];
const aboutYoutube = [`<iframe src="https://www.youtube.com/embed/i44_vjJfeVI?si=iW5KSZXlnPz3MQpb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`,`<iframe src="https://www.youtube.com/embed/bk6rzt08i0Q?si=d6Jevm7H1MzIPE4G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`];

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