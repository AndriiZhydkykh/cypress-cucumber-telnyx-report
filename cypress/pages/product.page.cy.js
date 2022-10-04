import Page from './page.cy'
const shakenLink='//h2//span[text()="SHAKEN/ STIR"]'

class ProductPage{
  clickShakenLink(){
    Page.clickX(shakenLink)
  }
}

module.exports = new ProductPage();