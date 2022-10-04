
Feature: Testing Support center page

    Background:
        Given A user open the main page and close the cookies modal window - support feature

    Scenario: ID-1 Find the "Getting Started in Video Room" article  in the support center
        When A user click on the support center link
        Then A user enter "getting started with video room" in the search field and press enter
        Then A user sees the support telnyx search result
        Then A user sees the "getting started with video room" article in the search results
     
    Scenario: ID-2 Open the "getting started" article in the support page
        When A user click on the support center link
        Then A user open the "getting started" article
        Then A user sees the open "getting started" article

    Scenario: ID-3 Return to the telnyx home page from the support page.
        When A user click on the support center link
        Then A user click on "go to telnyx" link on the top right of the page and sees the Main page