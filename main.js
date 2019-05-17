defaultUrl = 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
meme1Url = 'http://i0.kym-cdn.com/entries/icons/original/000/022/940/spongebobicon.jpg'

class Classic {
  constructor(art_url=defaultUrl) {
    this.frame = 'black';
    this.art_url = art_url;
  }
  render() {
    let el = document.createElement('div')
    el.style.width = '100px'
    el.style.height = '100px'
    el.style.backgroundImage = `url(${this.art_url})`
    el.style.border = `5px solid ${this.frame}`;
    el.style.backgroundSize = 'cover'
    document.body.appendChild(el);

  }
}


class Meme {
  constructor(art_url=meme1Url) {
    this.frame = 'red';
    this.meme1Url = meme1Url;
  }
  render() {
    let el = document.createElement('div')
    el.style.width = '100px'
    el.style.height = '100px'
    el.style.backgroundImage = `url(${this.meme1url})`
    el.style.border = `5px solid ${this.frame}`;
    el.style.backgroundSize = 'cover'
    document.body.appendChild(el);

  }
}


var art1 = new Classic("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg")
art1.render()

var meme1 = new Meme("http://i0.kym-cdn.com/entries/icons/original/000/022/940/spongebobicon.jpg")
meme1.render()
