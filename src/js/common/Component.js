export class Component {
  #parentElement;
  #props;
  #context;
  #LineLink;
  #YoutubeLink;
  #FacebookLink;
  #InstagramLink;
  constructor(parentElement, props = {}, context = {}){
    this.#parentElement = parentElement;
    this.#props = props;
    this.#context = context;
    this.#LineLink = "https://line.me/R/ti/p/@dih3004d?ts=08061721&oat_content=url";
    this.#YoutubeLink = "https://m.youtube.com/user/youtsubeful";
    this.#FacebookLink = "https://www.facebook.com/AQUIXXX?mibextid=ZbWKwL";
    this.#InstagramLink = "https://www.instagram.com/akifumitsukamoto777/?igsh=emkyOW1tdmpsencw&utm_source=qr";
  
    this.render();
  }

  get parentElement(){
    return this.#parentElement;
  }

  get props(){
    return this.#props;
  }

  get context(){
    return this.#context;
  }

  get LineLink(){
    return this.#LineLink
  }

  get YoutubeLink(){
    return this.#YoutubeLink;
  }

  get FacebookLink(){
    return this.#FacebookLink;
  }

  get InstagramLink(){
    return this.#InstagramLink;
  }

  render(){
    throw new Error("All components must implement render method!");
  }
}