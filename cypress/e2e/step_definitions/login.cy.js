import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
const LoginPage = require("../../pages/login.page.cy");
const Expect = require("../../helper/expect.cy");

Given("The user open the login page", () => {
  LoginPage.open();
});
//ID-6
When("A user enters the valid username, and invalid password and click the log in button", (table) => {
  table.hashes().forEach((row) => {
    LoginPage.submitLogin(row.username, row.password)
  })
});
Then("The flash notice {string} is displayed",(flash) => {
  Expect.shouldElementXIncludeText(LoginPage.getFlashNotice(),flash)
});
//ID-7
When("A user enters the invalid username, and valid password and click the log in button", (table) => {
  table.hashes().forEach((row) => {
    LoginPage.submitLogin(row.username, row.password)
  })
});
//ID-8
When("A user enters the invalid username, and invalid password and click the log in button", (table) => {
  table.hashes().forEach((row) => {
    LoginPage.submitLogin(row.username, row.password)
  })
});



