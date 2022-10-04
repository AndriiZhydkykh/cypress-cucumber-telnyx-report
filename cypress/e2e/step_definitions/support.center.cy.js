import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
const MainPage = require("../../pages/main.page.cy");
const SupportCenterPage = require("../../pages/support.center.page.cy");
const Expect = require("../../helper/expect.cy")

Given("A user open the main page and close the cookies modal window - support feature", () => {
  MainPage.open();
  cy.closeModalWindowInManePage();
});

//ID-1
When("A user click on the support center link",() => {
  MainPage.clickSupportCenterLink();
});

Then("A user enter {string} in the search field and press enter",(text) => {
    SupportCenterPage.setSearchInput(text)
});
Then("A user sees the support telnyx search result",() => {
  Expect.shouldElementXIncludeText(SupportCenterPage.getSearchResult(),"Search results for")
});

Then("A user sees the \"getting started with video room\" article in the search results",() => {
  Expect.shouldElementXIncludeText(SupportCenterPage.getSearchResultArticle(),"Room")
});

//ID-2
Then("A user open the \"getting started\" article",() => {
    SupportCenterPage.clickGettingStartedArticle()
});
Then("A user sees the open \"getting started\" article",() => {
  Expect.shouldElementXIncludeText(SupportCenterPage.getGettingStartedArticleTitle(),"Getting Started")
});

//ID-3
Then("A user click on \"go to telnyx\" link on the top right of the page and sees the Main page",() => {
  cy.request(SupportCenterPage.getGoToTelnyxLink()).its('body').should('include', MainPage.getLogo())

});

