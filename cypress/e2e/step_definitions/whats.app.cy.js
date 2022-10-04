import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
const WhatsAppPag = require("../../pages/whats.app.page.cy");
const MainPage = require("../../pages/main.page.cy")
const Expect = require("../../helper/expect.cy");


Given("A user open the main page and close the cookies modal window - whats up feature", () => {
    MainPage.open();
    cy.closeModalWindowInManePage();
});

When("A user clicks the WhatsApp in the footer",() => {
    MainPage.clickWhatsappApiFooterLink();
});

Then("A user sees the WhatsApp Business API for enterprises' title",() => {
    Expect.shouldElementXBeVisible(WhatsAppPag.getWhatsAppTitle())
}); 