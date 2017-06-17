## CRC

    Classname: User
    Parent class: NA
    Subclasses: NA
    Responsibilities: 
        - login 
        - sign up
        - create/view/recommend itinerary
    Collaborators: 
        - Itinerary

-----------------------------------------------

    Classname: Itinerary
    Parent class: UserItineraries
    Subclasses: 
    Responsibilities: 
        - Knows its ID
        - Price
        - has list of flights
        - has ratings
        - has # of recommendations
    Collaborators: 
        - Flights
        - Accommodations
        - Entertainment

-----------------------------------------------
 
    Classname: UserItineraries
    Parent class: Itinerary
    Subclasses:
    Responsibilities:
        - Itinerary
        - Given ID get Itinerary
        - knows users
    Collaborators: 
 
-----------------------------------------------

    Classname: Flight
    Parent class:
    Subclasses:
    Responsibilities:
        - knows its Origin
        - destination
        - to/from dates
        - price
    Collaborators:

-----------------------------------------------
 
    Classname: Accommodation
    Parent class:
    Subclasses:
    Responsibilities:
        - address
        - Price
        - occupancy
        - unit type
        - Amenities
    Collaborators:
 
-----------------------------------------------

    Classname: Entertainment <<Abstract>>
    Parent class:
    Subclasses: Attraction, restaurant
    Responsibilities: 
        - Price range
        - address
        - rating
        - entertainment type
        - reservation
        - reviews
        - operation hours
    Collaborators:

-----------------------------------------------

    Classname: Attraction
    Parent class: Entertainment
    Subclasses:
    Responsibilities:
        - AdultOnly <3
    Collaborators:

-----------------------------------------------

    Classname: Restaurant
    Parent class: Entertainment
    Subclasses:
    Responsibilities:
        - cuisine
    Collaborators:


Node.js 7, MongoDB, plus dependencies in package.json are needed.
