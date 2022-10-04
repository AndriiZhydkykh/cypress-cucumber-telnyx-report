const shakenPageArticleTitle='//h1//em[text()="SHAKEN/STIR"]'

class ShakenPage{
  getShakenPageArticleTitle(){
    return shakenPageArticleTitle
  }
}
module.exports = new ShakenPage();