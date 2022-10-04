
Feature:Blog Page testing

    Background:
        Given A user open the main page and close the cookies modal window - blog feature

    Scenario: ID-14 Find the Fax APIs, the basics and benefits article on the blog page
    
        When A user clicks the Blog link in the Resources dropdown on the header menu
        Then A user enter the "Fax APIs, the basics and benefits" in the search field and press enter
        Then A user sees the Fax APIs, the basics and benefits article
