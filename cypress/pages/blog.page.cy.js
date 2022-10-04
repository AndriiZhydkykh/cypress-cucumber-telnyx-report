import Page from './page.cy'
const searchInput='#search'
const searchResultArticleTitle="//h2[contains(text(),'Fax APIs')]"

class BlogPage{

  setSearchInput(text){
    Page.typeEndPressEnter(searchInput,text)
  }
  
  getSearchResultArticleTitle(){
    return searchResultArticleTitle
  }

}

module.exports = new BlogPage();