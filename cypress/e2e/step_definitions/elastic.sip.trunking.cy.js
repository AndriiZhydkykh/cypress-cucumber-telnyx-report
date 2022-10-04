import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
const ElasticSIPTrunkingPage = require("../../pages/elastic.sip.trunking.page.cy");
const MainPage = require("../../pages/main.page.cy")
const Expect = require("../../helper/expect.cy");


Given("A user open the main page and close the cookies modal window - elastic feature", () => {
    MainPage.open();
    cy.closeModalWindowInManePage();
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
 

