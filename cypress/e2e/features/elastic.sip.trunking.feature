
Feature: Elastic SIP Trunking Page testing

    Background:
        Given A user open the main page and close the cookies modal window

    Scenario: ID-4 Open "what is SIP trunking" in the frequently asked questions on the  SIP trunking page
    
        When A user click on the Elastic SIP Trunking in the product dropdown on the header menu
        Then A user click on the plus icon in "what is SIP trunking" question
        Then A user sees open the frequently asked about what is SIP trunking
