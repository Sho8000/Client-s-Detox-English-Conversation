import { Component } from "../component.js";
import { IndexContents, IndexYoutube, IndexSubbomment, Pictures, voiceTitle, BananaPic, IndexSubbommentThoughtness, IndexCourseTitle, IndexCoursePeriod, IndexCourseComment, IndexCourseExp, textIdName } from "../common/Variable.js";

const BASE_CLASS = "indexPage";

export class Index extends Component{
  render(){
    if($("#app").hasClass("indexPage")){
      //add section container
      const children = $(
        `<section id="${BASE_CLASS}__contents">
          <div class="${BASE_CLASS}__container">
          </div>
        </section>`
      )
      for(let i=0;i<IndexContents.length;i++){
      //add each section contents
      let odd = "";
        if(i%2===0){
          odd = "odd";
        }
        const eachSections = $(
          `<div class="${BASE_CLASS}__items ${IndexContents[i]} ${odd}"></div>`
        )
        children.find(`.${BASE_CLASS}__container`).append(eachSections)

        //add each content
        let eachContents;
        switch (IndexContents[i]) {
          case "Youtube":
            eachContents = $(
              `<swiper-container class="mySwiper" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true" slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100" coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true">
                <swiper-slide>
                  ${IndexYoutube[0]}
                  <div class="filterLeft"></div>
                  <div class="filterRight"></div>
                </swiper-slide>
                <swiper-slide>
                  ${IndexYoutube[1]}
                  <div class="filterLeft"></div>
                  <div class="filterRight"></div>
                </swiper-slide>
                <swiper-slide>
                  ${IndexYoutube[2]}
                  <div class="filterLeft"></div>
                  <div class="filterRight"></div>
                </swiper-slide>
              </swiper-container>`
              )
              children.find(".Youtube").append(eachContents)
            break;

          case "Maincomment":
            eachContents = $(
              `<div class="comments">
                <div class="mainComment">
                  <img src="resource/buchake.png" alt="mainComment">
                </div>
                <div class="lineBtn">
                  <a href="${this.LineLink}"><button class="lineBtn"><p class="font_p_m fontWaitBold">LINEで相談！</p></button></a></div>
              </div>
              <div class="mainPic">
                <img src="resource/Tsukamoto-san.png" alt="mainPic">
              </div>`
            )
            children.find(".Maincomment").append(eachContents)
            break;

          case "Course":
            eachContents = $(
              `<div class="courseContainer">
                <div class="CourseTitle">
                  <p class=""font_p_xl fontWaitBold>コース</p>
                </div>
                <div class="CourseList"></div>
                <a href="../pages/Menu.html"><div class="CourseReadMore"><p class="font_p_L fontWaitBold">Read more &gt;</p></div></a>
              </div>`
            )

            for(let i=0;i<IndexCourseTitle.length;i++){
              //to add talking Banana
              let talkingBNN = (i<2) ? `${BananaPic[7]}` : ``;

              //to change the period background
              let periodColor = "";
              if(IndexCoursePeriod[i]==="12ヶ月コース"){
                periodColor = "coursePeriodColorB";
              } else if(IndexCoursePeriod[i]==="6ヶ月コース"){
                periodColor = "coursePeriodColorG";
              }
              let courseContents = $(
                `<div class="courseCard">
                  <div class="cTitle"><p class="font_p_L fontWaitBold">${IndexCourseTitle[i]}</p></div>
                  <div class="cPeriod ${periodColor}"><p class="font_p_m fontWaitBold">${IndexCoursePeriod[i]}</p></div>
                  <div class="cExp"><ul class="list"></ul></div>
                  <div class="cComment"><p class="font_p_m fontWaitBoldNormal">${IndexCourseComment[i]}</p></div>
                  <div class="Banana">${talkingBNN}</div>

                </div>`
              )
              for(let j=0;j<IndexCourseExp[i].length;j++){
                const List = $(
                  `<li>${IndexCourseExp[i][j]}</li>`
                )
                courseContents.find(".list").append(List);
              }
              eachContents.find(".CourseList").append(courseContents);
            }

            children.find(".Course").append(eachContents)           
            break;

          case "SubcommentThoughtness":
            eachContents = $(
              `<div class="SubcommentThoughtnessContainer">
                <div class="comments">
                  <p class="font_p_xl fontWaitBold">${IndexSubbommentThoughtness[0]}</p>
                  <p class="font_p_m fontWaitBoldNormal">${IndexSubbommentThoughtness[1]}</p>
                  <a href="../pages/About.html#${textIdName[2]}"><p class="font_p_L fontWaitBold">${IndexSubbommentThoughtness[2]}</p></a>
                </div>
                <div class="images">
                  ${IndexSubbommentThoughtness[3]}
                  <div class="subImg">
                    ${BananaPic[0]}
                  </div>
                </div>
              </div>`
            )
            children.find(".SubcommentThoughtness").append(eachContents)            
            break;

          case "Subcomment":
            eachContents = $(
              `<div class="SubcommentContainer">
                <div class="comments">
                  <p class="font_p_xl fontWaitBold">${IndexSubbomment[0]}</p>
                  <p class="font_p_m fontWaitBoldNormal">${IndexSubbomment[1]}</p>
                  <a href="../pages/About.html#${textIdName[3]}"><p class="font_p_L fontWaitBold">${IndexSubbomment[2]}</p></a>
                </div>
                <div class="images">
                  ${IndexSubbomment[3]}
                  <div class="subImg">
                    ${BananaPic[1]}
                  </div>
                </div>
              </div>`
            )
            children.find(".Subcomment").append(eachContents)
            break;

          case "Voice":
            eachContents = $(
              `<div class="voiceContainer">
                <div class="titleContainer">
                  <p class="font_p_xl fontWaitBold">乗客の声</p>
                  ${BananaPic[6]}
                </div>
                <div class="cardContainer"></div>
                <div class="readMore">
                  <a href="../pages/Voice.html"><p class="font_p_L fontWaitBold">Read more ></p></a>
                </div>
              </div>`
            )
            for(let i=0; i<2; i++){
              const addIndexVoiceCard = $(
                `<div class="voiceCard">
                  <p class="font_p_L fontWaitBold">${voiceTitle[i]}</p>
                  ${Pictures[i]}
                </div>`
              )
              eachContents.find(".cardContainer").append(addIndexVoiceCard)
            }

            children.find(".Voice").append(eachContents)
            
            break;

          default:
            break;
        }
      }

      this.parentElement.append(children);
    }
  }
}