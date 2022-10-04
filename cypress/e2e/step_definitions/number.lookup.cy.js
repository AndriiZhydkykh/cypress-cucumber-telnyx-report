import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
const NumberLookup = require("../../pages/number.lookup.page.cy");
const MainPage = require("../../pages/main.page.cy")
const Expect = require("../../helper/expect.cy");


Given("A user open the main page and close the cookies modal window - number feature", () => {
    MainPage.open();
    cy.closeModalWindowInManePage();
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