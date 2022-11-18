import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
const MainPage = require("../../pages/main.page.cy");
const ElasticSIPTrunkingPage = require("../../pages/elastic.sip.trunking.page.cy");
const LoginPage = require("../../pages/login.page.cy");
const ProductPage = require("../../pages/product.page.cy");
const ShakenPage = require("../../pages/shaken.page.cy");
const BlogPage = require("../../pages/blog.page.cy");
const NumberLookup = require("../../pages/number.lookup.page.cy");
const SupportCenterPage = require("../../pages/support.center.page.cy");
const Expect = require("../../helper/expect.cy")

Given("A user open the main page and close the cookies modal window", () => {
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


When("A user click on the Elastic SIP Trunking in the product dropdown on the header menu",() => {
    MainPage.clickElasticSIPTrunkingDropdownProductHeaderMenuLink();
});

Then("A user click on the plus icon in \"what is SIP trunking\" question",() => {
    ElasticSIPTrunkingPage.clickWhatIsElasticSIPButton()
});

Then("A user sees open the frequently asked about what is SIP trunking",() => {
  Expect.shouldElementXBeVisible(ElasticSIPTrunkingPage.getTextAboutWhatIsElasticSIP())
});


When("A user click on the number-lookup in product dropdown on the header menu",() => {
  MainPage.clickNumberLookUpProductHeaderMenuLink();
});

Then("A user clicks the link to learn more in the contact center on the number search page",() => {
  NumberLookup.clickLearnMoreInContactCenterLink();
});

Then("A user sees the Contact Center Solutions title in the contact center page",() => {
  Expect.shouldElementXBeVisible(NumberLookup.getContactCenterSolutionTitle())
}); 

When("A user clicks the all product link in products dropdown on the header menu",() => {
  MainPage.clickSeeAllProductProductHeaderMenuLink();
});

Then("A user clicks to the SHAKEN STIR product",() => {
  ProductPage.clickShakenLink();
});

Then("A user sees the SHAKEN STIR title",() => {
  Expect.shouldElementXBeVisible(ShakenPage.getShakenPageArticleTitle())
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

Then("A user open the \"getting started\" article",() => {
    SupportCenterPage.clickGettingStartedArticle()
});
Then("A user sees the open \"getting started\" article",() => {
  Expect.shouldElementXIncludeText(SupportCenterPage.getGettingStartedArticleTitle(),"Getting Started")
});

Then("A user click on \"go to telnyx\" link on the top right of the page and sees the Main page",() => {
  cy.request(SupportCenterPage.getGoToTelnyxLink()).its('body').should('include', MainPage.getLogo())
});

Given("The user open the login page", () => {
  LoginPage.open();
});

When("A user enters the valid username, and invalid password and click the log in button", (table) => {
  table.hashes().forEach((row) => {
    LoginPage.submitLogin(row.username, row.password)
  })
});
Then("The flash notice {string} is displayed",(flash) => {
  Expect.shouldElementXIncludeText(LoginPage.getFlashNotice(),flash)
});

When("A user enters the invalid username, and valid password and click the log in button", (table) => {
  table.hashes().forEach((row) => {
    LoginPage.submitLogin(row.username, row.password)
  })
});

When("A user enters the invalid username, and invalid password and click the log in button", (table) => {
  table.hashes().forEach((row) => {
    LoginPage.submitLogin(row.username, row.password)
  })
});
