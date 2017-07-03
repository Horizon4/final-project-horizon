### Date: June 22, 2017 and June 28, 2017
### Time: 10:00 AM - 11:00 AM and 2:00 PM - 3:00 PM
### Location: IC 406 and AA 208

## Participants

- Ryan Abe
- Zain Amir
- Colleen Brown
- Howard Chen
- Ke Deng
- Varun Sharma
- Jason Shum

## Meeting Minutes

Front end
-	Progress bar
-	Navigation bar
-	Showing flights and hotels in itineraries
-	Navbar should have “View” “Create” “Recommendations” and “Logout” 
-	How the dashboard should look like
  Has completed itineraries when “View” is selected with a “+” somewhere (for next sprint)
-	When “create” is chosen, then there is a progress bar at the bottom with:
    - Getting Started
    - Flights
    - Accomodations
    - Confirm
  and then also has a “Continue” and “Save” button (next sprint)
  - Continue button becomes Confirm button when we’re at the last stage (reviewing)
-	To do:
    - Navigation Bar
    - Process Bar
-make progress bar a component
-remove important! tags
- Get Started
    - origin: (string) the departure location
    - destination: (string) the arrival location
    - departureDate: (date) the departure date(YYYY-MM-DD)
    - returnDate: (date) the return date(YYYY-MM-DD)
    - price: (number) the price of the itinerary
- Flight
    - price: (number) the price of the flight
    - Optional:
    - adultCount: (number) the number of adult seats
    - childCount: (number) the number of child seats
    - seniorCount: (number) the number of senior seats
    - cabin: (string) the type of cabin the seat is in (i.e. economy, first class, etc)
    - carrier: (string) the airline of the flight
- 1. GET api/addFlight/:id
- 2. GET api/findFlights/:id
- Accommodation
    - In terms of price:1 ($) or 2 ($$) or 3 ($$) or 4 ($$)
- 1. GET /api/findAccommodation/:id
- Confirm
    - itineraryProcessId:
    - 1. POST api/createItinerary
- Don't hit until 3PM
- flights[0][slice][0][segment][leg][0] YYZ to LAX
- flights[0][slice][1][segment][leg][1] LAX to YYZ

Back end
-	Itinerary with Accommodations included
-	Able to save changes in itinerary (prepare for it)
-	Make accommodations thing
-	View selected itineraries
-	Show hotels
-	View incomplete itinerary process
-	Have multiple destinations
-	Merging hotels and flights
-	Change itineraries to itinerary process so that the users can save it
-	Make a different thing call itinerary 
-	Itinerary -> ItineraryProcess
-	ItineraryProcess has:
    - Users (ID?)
    - Flights
    - Accommodations
    - Previous items in itinerary
-	Also making object Itinerary for completed itineraries (ItineraryProcess is for uncompleted ones)
-	ItineraryProcess stores user input and collects data from that
-	Upon hitting continue, flights gets populated
-	Getting rid of routes in flights
-	When continue is clicked, then we addFlights and pass in the proper parameters for it
-	To do:
    - Accommodations
    - Completing endpoints (getting completed itineraries by specific user)
-	Side note: PUT != Create, POST == Create, PUT == Update

## Sprint Backlog

### Story 2 - Progress Bar

- As Michael, I should be guided along in my itinerary creation by making me pick the minimal details about flights, hotels etc and I should see a visual of the process so that I have a good travelling experience with the help of the website's guidance

- Condition of Satisfaction
    1. When I am creating an itinerary I should be able to see in the process bar how far into the itinerary creating process I am

- Priority = 2
- Point = 4

### Story 4 - Itinerary with Accomodations

- As Peter, I should be able to enter my accommodations details like how many bedrooms, star-rating and how much of my budget should be allocated to the accommodations section so that I can see itineraries based on my accommodations preferences

- Condition of Satisfaction
    1. When I click submit I should see itineraries with both accommodations and flights at this point
    2. If no accommodations exist under that budget suggest me an allocation of the budget to the accommodations section

- Priority = 5
- Point = 8

### Story 6 - View all completed itinerary

- As Michael, I want to be able to see all the completed itineraries on the dashboard so that I can navigate between different itineraries easily, and also so I can easily access them throughout my trip and have a guided experience

- Condition of Satisfaction
    1. When I go to the dashboard under the completed itineraries tab I should be able to see all the completed itineraries I have created
    2. When I select an itinerary I should be able to see all of the details about it  

- Priority = 3
- Point = 3

### Story 7 - View all uncompleted itineraries Process

- As Leo, I want to able to see all the incompleted itineraries on the dashboard so that I can select one and complete it

- Condition of Satisfaction
    1. When I go to the dashboard under the incompleted itineraries tab I should be able to see all the incompleted itineraries
    2. When I select an itinerary I should be able to complete it

- Priority = 3
- Point = 4

## Tasks

**Ryan Abe**
- product backlog
- sprint retrospective
- sprint planning meeting
- system design
- endpoints

**Zain Amir**
- design change, replace Itinerary with Itinerary Process and create a separate itinerary object
- View completed itineraries(backend)
- View uncompleted itineraries(backend)

**Colleen Brown**
- create a design as to how the accomodations endpoint should be created and how to interact properly with the api
- took notes during the meetings for the meeting minutes section

**Howard Chen**
- navigation bar with “View”, “Create”, “Recommendations” and “Logout”

**Ke Deng**
- navigation bar linking to pages
- view page set up

**Varun Sharma**

**Jason Shum**
- find an api to look for accommodations
- develop routes to find accommodations using api and return usable data for the itinerary
