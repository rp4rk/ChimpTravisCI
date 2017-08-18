Feature: Google Image search
    In order to find a picture of a newfoundland dog
    As a user
    I want to search Google Image

    Scenario: Search for newfoundland dogs
        Given I am on the google image search page
        Then I enter "newfoundland dogs" into the search bar
        Then I see the results of my image search
    
    