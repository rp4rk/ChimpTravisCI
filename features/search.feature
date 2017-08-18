Feature: Google Term search
    In order to find new information
    As a user
    I want to search Google

    Scenario: Search for pugs
        Given I am on the google home page
        Then I enter "Pugs" into the search bar
        Then I press the term search button
        Then I see the results from my term search
    
    