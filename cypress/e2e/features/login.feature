
Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given The user open the login page

    Scenario: ID-6 Sign in with the valid email and invalid password

        When A user enters the valid username, and invalid password and click the log in button
         | username            | password|
         | kinomanj@gmail.com  | Andrey2181681|
        Then The flash notice "That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again." is displayed

    Scenario: ID-7 Sign in with invalid email and valid password

        When A user enters the invalid username, and valid password and click the log in button
         | username            | password   |
         | kinomanjj@gmail.com | Andrey2181681! |
        Then The flash notice "That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again." is displayed

    Scenario: ID-8 Sign in with invalid email and invalid password

        When A user enters the invalid username, and invalid password and click the log in button
         | username            | password   |
         | kinomanjj@gmail.com | Andrey2181681 |
        Then The flash notice "That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again." is displayed
        
       
