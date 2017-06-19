# System Design

## Table of Contents
1. [System Architecture](#System-Architecture)
2. [CRC Diagrams](#CRC)
3. [Dependencies and Assumptions](#Dependencies)

## System Architecture <a name="System-Architecture"></a>
![System Architecture](systemArch.jpg?raw=true)

MongoDB will be the main database where all the data is stored (User info, travel Itineraries, etc).

Node.js and Express are the controller, where it does all of the backend work and controls the flow of the application.

HTML/CSS will be the view portion, with Jquery handling the client-side scripts.

## CRC <a name="CRC"></a>

    Classname: User
    Parent class: NA
    Subclasses: NA
    Responsibilities: 
        - can login 
        - can sign up
        - create/view/recommend itinerary
    Collaborators: 
        - Itinerary

-----------------------------------------------

    Classname: Itinerary
    Parent class: UserItineraries
    Subclasses: 
    Responsibilities: 
        - Knows its ID
        - Know Price
        - has list of flights
        - has ratings
        - has # of recommendations
    Collaborators: 
        - Flight
        - Accommodation
        - Entertainment

-----------------------------------------------
 
    Classname: UserItineraries
    Parent class: Itinerary
    Subclasses:
    Responsibilities:
        - has a list of Itineraries
        - Given ID get Itinerary
        - knows users
    Collaborators: 
 
-----------------------------------------------

    Classname: Flight
    Parent class:
    Subclasses:
    Responsibilities:
        - knows its Origin
        - knows its destination
        - knows to/from dates
        - knows its price
    Collaborators:

-----------------------------------------------
 
    Classname: Accommodation
    Parent class:
    Subclasses:
    Responsibilities:
        - has address
        - has Price
        - has occupancy number
        - has unit type
        - has Amenities
    Collaborators:
 
-----------------------------------------------

    Classname: Entertainment <<Abstract>>
    Parent class:
    Subclasses: Attraction, restaurant
    Responsibilities: 
        - has a Price range
        - has address
        - has rating
        - has entertainment type
        - knows whether it can be reserved
        - has reviews
        - has operation hours
    Collaborators:

-----------------------------------------------

    Classname: Attraction
    Parent class: Entertainment
    Subclasses:
    Responsibilities:
        - knows whether it is Adults Only or not
    Collaborators:

-----------------------------------------------

    Classname: Restaurant
    Parent class: Entertainment
    Subclasses:
    Responsibilities:
        - has a cuisine type
    Collaborators:

## Dependencies <a name="Dependencies"></a>
Node.js 7, MongoDB, plus dependencies in package.json are needed.
