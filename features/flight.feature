Feature: Flight
  As a persona
  I want to be able to create transaction for flight

  Scenario: Domestic round trip
    Given user access tiket website
    When user click the flight menu
    Then user redirected to the flight page
    When user makes a ticket reservation
    Then user redirected to the result page
    When user checks the filter feature for transit & departure time
    And select the departure flights
    And select the return flights
    Then user redirected to the Contact Person Detail page
    When user fill all form detail passenger
    And continue to the payment page
    Then user redirected to the Payment Method page
    When user selected the virtual account as a payment method
    Then the virtual account has been selected
    When user go to the order list 
    And login to the website
    Then user success login



