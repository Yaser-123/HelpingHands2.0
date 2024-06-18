# backend

Backend service for HelpingHands.

## endpoints

`[GET] /`: Debug endpoint.

### users related

* `[GET] /users/:user_id`: Fetchs the info of user with the user ID provided.
* `[POST] /users/new`: Adds a new user using provided JSON body to the database.

### jobs related

* `[GET] /jobs/:job_id`: Fetchs info about the job with provided job ID.
* `[POST] /jobs/new`: Creates a new job with provided JSON body and adds it to the database. 