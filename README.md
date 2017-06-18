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
