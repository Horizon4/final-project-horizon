# final-project-horizon
A web based application which allows users to design their customized vacation or trip as seamlessly as possible.


# Project setup

1. Install node
2. Install mongodb and also install robomongo to see the data in the db
3. clone the repo and run "npm install" or "npm i"
4. run the server with "npm run dev"
### 5. IMPORTANT for frontend work you will also need to run "npm run webpack" to detect all the frontend changes

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
