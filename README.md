# final-project-horizon
A web based application which allows users to design their customized vacation or trip as seamlessly as possible.


# Project setup

1. Install node
2. Install mongodb and also install robomongo to see the data in the db
3. clone the repo and run "npm install" or "npm i"

## Running the Project

1. Get MongoDB running.
2. Run the server with "npm run dev".
3. That's it. Nothing needs to be done to get the frontend running anymore.

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
-response: 401
      - body: message Unauthorized

## Create

#### description: create a new user
- request: `PUT /api/users/`
    - body: object
      - username: (string) the username of the account
      - password: (string) the password of the account
- response: 200
    - body: string
      - username: (string) the username of the account
-response: 500
      - body: message from the Database that the username already exists

#### description: create a new flight
- request: `PUT /api/flight/`
    - body: object
      - origin: (string) the departure location
      - destination: (string) the arrival location
      - departureDate: (date) the departure date
      - returnDate: (date) the return date
      - price: (number) the price of the flights
      *Optional:*
      - adultCount: (number) the number of adult seats
      - childCount: (number) the number of child seats
      - seniorCount: (number) the number of senior seats
      - cabin: (string) the type of cabin the seat is in (i.e. economy, first class, etc)
      - carrier: (string) the airline of the flight
- response: 200
    - body: string
      - origin: (string) the departure location
      - destination: (string) the arrival location
      - departureDate: (date) the departure date
      - returnDate: (date) the return date
      - price: (number) the price of the flights
      *Optional:*
      - adultCount: (number) the number of adult seats
      - childCount: (number) the number of child seats
      - seniorCount: (number) the number of senior seats
      - cabin: (string) the type of cabin the seat is in (i.e. economy, first class, etc)
      - carrier: (string) the airline of the flight
-response: 500
      - body: message from the Database that a component was missing when creating the flight

#### description: get a flight
- request: `GET /api/flight/:id`
- response: 200
    - body: string
      - origin: (string) the departure location
      - destination: (string) the arrival location
      - departureDate: (date) the departure date
      - returnDate: (date) the return date
      - price: (number) the price of the flights
      *Optional:*
      - adultCount: (number) the number of adult seats
      - childCount: (number) the number of child seats
      - seniorCount: (number) the number of senior seats
      - cabin: (string) the type of cabin the seat is in (i.e. economy, first class, etc)
      - carrier: (string) the airline of the flight
-response: 500
      - body: message from the Database that flight does not exist

#### description: get a flight
- request: `GET /api/findFlights/:id`
- response: 200
    - body: string
-response: 500
      - body: message from the Database that flight does not exist
