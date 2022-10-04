import Page from './page.cy'
const searchInput = '[class="search__input js__search-input o__ltr"]'
const searchResultArticle ='//span[text()=" Rooms"]'
const searchResult='//span[text()="Search results for:"]'
const gettingStartedArticle='//h2[text()="Getting Started"]'
const gettingStartedArticleTitle='//h1[text()="Getting Started"]'
const goToTelnyxLink='https://telnyx.com'

class SupportCenterPage{
    
setSearchInput(text){
    Page.typeEndPressEnter(searchInput,text)
}
getSearchResult(){
    return searchResult
}
getSearchResultArticle(){
    return searchResultArticle
}
clickGettingStartedArticle(){
    Page.clickX(gettingStartedArticle)
}
getGettingStartedArticleTitle(){
    return gettingStartedArticleTitle
}
getGoToTelnyxLink(){
return goToTelnyxLink
}
}

module.exports = new SupportCenterPage();