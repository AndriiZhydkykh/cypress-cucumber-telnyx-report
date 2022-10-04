
Feature:Developer docs Page testing

    Background:
        Given A user open the main page and close the cookies modal window - developer feature

    Scenario: ID-9 Open messaging documentation with API v.1
    
        When A user clicks the Developer Docs in Resources dropdown on the header menu
        Then A user clicks click the API v1 button
        Then A user sees the  message in top page "This is the current API V1 documentation"
        Then A user clicks the Messaging on the left sidebar menu
        Then A user sees the Messaging title 
    
    Scenario: ID-10 Open messaging documentation with with API v.2
    
        When A user clicks the Developer Docs in Resources dropdown on the header menu
        Then A user clicks the Messaging on the left sidebar menu
        Then A user sees the Messaging title 

    Scenario: ID-11 Checked that Api v.1 has in sidibar these links: home, messaging,numbers,Call control, SIP trunking and development
    
        When A user clicks the Developer Docs in Resources dropdown on the header menu
        Then A user clicks click the API v1 button
        Then A user sees the  message in top page "This is the current API V1 documentation"
        Then A user sees in left sidebar these links: home,messaging,numbers,Call control,SIP trunking and development
        |links       | 
        |Home        |
        |Messaging   |
        |Numbers     |
        |Call Control|
        |SIP Trunking|
        |Development |

    Scenario: ID-12 Open Development Environment Setup from java with API v.2
    
        When A user clicks the Developer Docs in Resources dropdown on the header menu
        Then A user clicks the Development on the left sidebar menu
        Then A user clicks the SDK Setup button
        Then A user clicks the Java button
        Then A user sees the java API docs
