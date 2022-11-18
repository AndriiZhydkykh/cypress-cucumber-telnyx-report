
Feature:Number lookup Page testing

    Background:
        Given A user open the main page and close the cookies modal window

    Scenario: ID-5 Open learn more about the contact center in the number-lookup page
    
        When A user click on the number-lookup in product dropdown on the header menu
        Then A user clicks the link to learn more in the contact center on the number search page
        Then A user sees the Contact Center Solutions title in the contact center page
