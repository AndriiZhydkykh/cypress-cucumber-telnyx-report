import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
const ProductPage = require("../../pages/product.page.cy");
const ShakenPage = require("../../pages/shaken.page.cy");
const MainPage = require("../../pages/main.page.cy")
const Expect = require("../../helper/expect.cy");


Given("A user open the main page and close the cookies modal window - product feature", () => {
    MainPage.open();
    cy.closeModalWindowInManePage();
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