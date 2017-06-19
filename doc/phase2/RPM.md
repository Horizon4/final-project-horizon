### Date: June 14, 2017
### Time: 1:00 PM - 3:00 PM
### Location: IC 406

## Participants

- Ryan Abe
- Zain Amir
- Colleen Brown
- Howard Chen
- Ke Deng
- Varun Sharma
- Jason Shum

## Meeting Minutes

-	need to get link for pivotaltracker
-	create a file called sprint1.md to keep track of the meeting minutes
-	need to break down tickets
-	project planning (1st section done by Ryan)
    -	changing project backlog?
-	4 tickets (split into 2 tabs, front and back end)
    -	setup backend
    -	setup front end
    -	finish back end for login
    -	finish front end for login
-	completing story 1 then 3 then 2 (if there's time)
-	front end
    -	create itinerary button
    -	redirect pages
        -	main page
            -	origin
            -	destination
            -	budget
                -	of the flight
                -	whole budget for later
            -	to and from date
            -	submit button
            -	user must fill in all 4 fields
        -	signup
            -	username
            -	password
            -	password confirmation
        •	login
            -	username
            -	password
    -	after submitting, display the flight information
        -	get all flights within the budget
-	back end
    -	everything in nod.js starts from app.js
        -	add database lines
        -	brings the code from the database (db..js) to app.js
        -	start with routers (which are like controllers) then it goes to the model which calls the database to do some stuff
    -	install node 7
    -	POST - create
    -	PUT - update
    -	GET – fetches data
    -	DELETE – delete data
    -	Status codes
        -	200
            -	good, no problems
        -	300
            -	might not be needed
        -	400
            -	might not be needed
        -	500
            -	bad, problems
    -	back end
        -	Jason
            -	getting google APIs for flight information
        -	Colleen
            -	post request after they hit submit
                -	origin
                -	destination
                -	to date
                -	from date
                -	budget
            -	make a router
        -	Ryan:
            -   project planning
            -	Crc cards
-	Front end
    -	Make navigation (if there is time)

## Sprint 1 Backlog

#### Story 1 - Login System

- As a traveller, I should be able to create an account with ease so that I can login into the website with those credentials

- Condition of Satisfaction
    1. When I click sign-up I should be able to add username and password that will become my credentials
    2. After entering my username and password when I press login I should be taken to my home screen

- Priority = 1
- Point = 2

#### Story 3 - Itinerary with Flights only

- As Peter, I should be able to enter flight preferences like first-class, business-class etc and how much of budget should be allocated to the flight section so that I can see preferred flights as part of my travelling itenrary

- Condition of Satisfaction
    1. When I click submit I should see flights according to my criteria selected for me in each of the itinerary
    2. If no flights exist under that budget suggest me an allocation of the budget

- Priority = 5
- Point = 5
