Feature: Booking movie tickets

    Scenario: Successful booking of a movie ticket
        Given The user opens the page "http://qamid.tmweb.ru/client/index.php"
        When The user selects the day of the week
        And The user selects the time to watch the movie
        And The user chooses a seat in the hall
        And The user selects and clicks the book button
        Then The user sees the selected tickets

    Scenario: Successful booking of a movie ticket to a VIP place
        Given The user opens the page "http://qamid.tmweb.ru/client/index.php"
        When The user selects the day of the week
        And The user selects the time to watch the movie in a hall with VIP seats
        And The user chooses a VIP seat in the hall
        And The user selects and clicks the book button
        Then The user sees the selected tickets
