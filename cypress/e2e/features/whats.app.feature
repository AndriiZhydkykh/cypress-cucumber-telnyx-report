
Feature:Whats App  Page testing

    Background:
        Given A user open the main page and close the cookies modal window - whats up feature

    Scenario: ID-13 Open WhatsApp API from footer
    
        When A user clicks the WhatsApp in the footer
        Then A user sees the WhatsApp Business API for enterprises' title
