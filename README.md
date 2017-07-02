# final-project-horizon
A web based application which allows users to design their customized vacation
or trip as seamlessly as possible.

# Project setup

1. Install Node 7.0.0+
2. Install MongoDB (Optional: Install the DBMS Robo3t)
3. Clone the repo
5. Run "npm install" or "npm i"

## Running the Project

1. Start MongoDB and connect to the default port 27017.
2. Run the server with "npm run dev".

# API DOCUMENTATION

## Authentication

#### description: To SignIn
- request: `POST /api/signin/`
    - body: object
      - username: (string) the username of the account
      - password: (string) the password of the account
- response: 200
    - body: string
      - username: (string) the username of the account
- response: 500
    - body: Message from the Database
- response: 401
    - body: message Unauthorized

## Create

#### description: create a new user
- request: `PUT /api/user`
    - body: object
      - username: (string) the username of the account
      - password: (string) the password of the account
- response: 200
    - body: string
      - username: (string) the username of the account
- response: 500
    - body: message from the Database that the username already exists

#### description: create a new itinerary Process
- request: `POST /api/itineraryProcess`
    - body: object
      - username: (string) the username that is logged in
      - origin: (string) the departure location
      - destination: (string) the arrival location
      - departureDate: (date) the departure date(YYYY-MM-DD)
      - returnDate: (date) the return date(YYYY-MM-DD)
      - price: (number) the price of the itinerary

      *Optional:*
      - stopoverCount: (number) max number of stopovers, after creation the
                        value will be adjusted to match the number of stopovers
                        with the selected flights
- response: 200
    - body: string
      - origin: (string) the departure location
      - destination: (string) the arrival location
      - date: (date) the departure date(YYYY-MM-DD)
      - price: (number) the price of the itinerary
      *Optional:*
      - stopoverCount: (number) max number of stopovers, after creation the
                        value will be adjusted to match the number of stopovers
                        with the selected flights
- response: 500
    - body: Error from database or the username doesn't exist

#### description: create a new itinerary
- request: `POST /api/createItinerary`
    - body: string
      - itineraryProcessId : 5959393e3e9e4c2a915e579a

- response: 200
    - body: string
      - result: (array) of all the combinations
- response: 500
    - body: Missing required parameter

## Read

#### description: find flight
- request: `GET /api/findFlights/:id`
- response: 200
    - body: JSON String of list of solutions found using QPX-Express
- response: 500
    - body: Error message from QPX-Express

#### description: find uncompleted Processes
- request: `GET /api/uncompleted/:username`
- response: 200
    - body: JSON String of list of all the uncompleted itineraries
- response: 500
    - body: Error message from QPX-Express

## Update

#### description: add a flight to itinerary
- request: `PUT /api/addFlight/:id`
    - body: string
      - price: (number) the price of the flight

      *Optional:*
      - adultCount: (number) the number of adult seats
      - childCount: (number) the number of child seats
      - seniorCount: (number) the number of senior seats
      - cabin: (string) the type of cabin the seat is in (i.e. economy, first class, etc)
      - carrier: (string) the airline of the flight
- response: 500
    - body: Error message from database


#### description: find accommodations
- request: `PUT /api/findAccommodation/:id`
    - body: string
      - destination: Los Angelos
- response: 200
- response: 500
    - body: Invalid request
