import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
const DeveloperDocsPage = require("../../pages/developer.docs.page.cy");
const MainPage = require("../../pages/main.page.cy")
const Expect = require("../../helper/expect.cy");

Given("A user open the main page and close the cookies modal window - developer feature", () => {
    MainPage.open();
    cy.closeModalWindowInManePage();
});

When("A user clicks the Developer Docs in Resources dropdown on the header menu",() => {
    MainPage.clickDeveloperDocsResourcesHeaderMenuLink();
});
//ID-9,10
Then("A user clicks click the API v1 button",() => {
    DeveloperDocsPage.clickApiV1Button();
});
Then("A user sees the  message in top page \"This is the current API V1 documentation\"",() => {
    Expect.shouldElementXBeVisible(DeveloperDocsPage.getHeaderMessagingAPIV1())
}); 

Then("A user clicks the Messaging on the left sidebar menu",() => {
    DeveloperDocsPage.clickMessagingInSideBarLink();
}); 

Then("A user sees the Messaging title",() => {
    Expect.shouldElementBeVisible(DeveloperDocsPage.getMessagingArticleTitle())
}); 

//ID-11
Then("A user sees in left sidebar these links: home,messaging,numbers,Call control,SIP trunking and development",(table) => {
    table.hashes().forEach((row) => {
       Expect.shouldElementContains(DeveloperDocsPage.getApiV1LeftSideBarLink(),row.links)
      })
});
//ID-12
Then("A user clicks the Development on the left sidebar menu",() => {
    DeveloperDocsPage.clickDevelopmentInSideBarLink();
});
Then("A user clicks the SDK Setup button",() => {
    DeveloperDocsPage.clickSdkSetupButton();
});
Then("A user clicks the Java button",() => {
    DeveloperDocsPage.clickDevelopmentJavaButton();
});
Then("A user sees the java API docs",() => {
    Expect.shouldElementBeVisible(DeveloperDocsPage.getJavaApiDocsLink())
});
