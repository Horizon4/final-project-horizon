-----------------------------------------------
<br>

# Horizon

<br>
<br>


#### A travel planning and budgetting app

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>


## Table of Contents
1. [System Architecture](#System-Architecture)
2. [CRC Diagrams](#CRC)
3. [Dependencies and Assumptions](#Dependencies)

<br>

-----------------------------------------------


## System Architecture <a name="System-Architecture"></a>
![System Architecture](systemArch.jpg?raw=true)

MongoDB will be the main database where all the data is stored (User info, travel Itineraries, etc).

Node.js and Express are the controller, where it does all of the backend work and controls the flow of the application.

HTML/CSS will be the view portion, with Jquery handling the client-side scripts.


For example in the Log in system, the front end View is created in HTML/CSS with Jquery handling the actual log in logic. Express handles the backend controller, and MongoDB is the Model where user data is stored.

## CRC <a name="CRC"></a>
- UserItineraries was removed because Itinerary and ItineraryProcess have a User associated with them

-----------------------------------------------

    Classname: User
    Parent class:
    Subclasses:
    Responsibilities: 
        - can login 
        - can sign up
        - create/view/recommend itinerary
    Collaborators: 
        - Itinerary
        - ItineraryProcess

-----------------------------------------------

    Classname: Itinerary
    Parent class:
    Subclasses: 
    Responsibilities:
        - Knows its ID
        - Know Price
        - has list of flights
        - has ratings
        - has # of recommendations
        - object for completed itineraries
        - has a user
    Collaborators: 
        - Flight
        - Accommodation
        - Entertainment
        
-----------------------------------------------

    Classname: ItineraryProcess
    Parent class:
    Subclasses:
    Responsibilities:
        - Knows its ID
        - Know Price
        - has list of flights
        - has ratings
        - has # of recommendations
        - object for incompleted itineraries
        - stores user input then collects data
        - has a user
    Collaborators:
        - Flight
        - Accommodation
        - Entertainment

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
    Subclasses: Attraction, Restaurant
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
Node.js 7+, MongoDB, plus dependencies in package.json are needed.
