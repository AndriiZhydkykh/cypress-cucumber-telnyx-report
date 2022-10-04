import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
const MainPage = require("../../pages/main.page.cy");
const BlogPage = require("../../pages/blog.page.cy");
const Expect = require("../../helper/expect.cy")

Given("A user open the main page and close the cookies modal window - blog feature", () => {
  MainPage.open();
  cy.closeModalWindowInManePage();
});

When("A user clicks the Blog link in the Resources dropdown on the header menu",() => {
    MainPage.clickBlogResourcesHeaderMenuLink();
  });
  
Then("A user enter the {string} in the search field and press enter",(text) => {
    BlogPage.setSearchInput(text)
  });

Then("A user sees the Fax APIs, the basics and benefits article",() => {
    Expect.shouldElementXBeVisible(BlogPage.getSearchResultArticleTitle())
  });