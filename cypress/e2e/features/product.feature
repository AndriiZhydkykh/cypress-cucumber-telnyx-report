
Feature:Product Page testing

    Background:
        Given A user open the main page and close the cookies modal window

    Scenario: ID-15 Open SHAKEN/ STIR product
    
        When A user clicks the all product link in products dropdown on the header menu
        Then A user clicks to the SHAKEN STIR product
        Then A user sees the SHAKEN STIR title
