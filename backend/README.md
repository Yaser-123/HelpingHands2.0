# backend

Backend service for HelpingHands.

## running the service

Install the packages required using 
```sh
npm install
# or
yarn install
```
Create an `.env` file with the following content 
```
PGSQL_URI="YOUR POSTGRESQL CONNECTION URL"
```
Run the service using 
```
npm run dev
# or
node index.js
```
## endpoints

`[GET] /`: Debug endpoint.

### users related

- `[GET] /users/:user_id`: Fetchs the info of user with the user ID provided.
- `[POST] /users/new`: Adds a new user using provided JSON body to the database.

### jobs related

- `[GET] /jobs/:job_id`: Fetchs info about the job with provided job ID.
- `[POST] /jobs/new`: Creates a new job with provided JSON body and adds it to the database.
