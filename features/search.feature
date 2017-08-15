Feature: Google search
    In order to find new information
    As a user
    I want to search Google

    Scenario: Search for pugs
        Given I visit "https://www.google.co.uk/"
        And I enter "Pugs" into the search bar
        Then I see pugs
    
    