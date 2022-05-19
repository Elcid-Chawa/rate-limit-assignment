# ENDPOINT ACCESS RATE LIMITTER

## Assignment
### You are working as a Software Engineer for a company selling software as a service, SAAS. You are tasked with implementing a Rate-Limiting service to protect already existing endpoints of the company. Each user account should be able to perform operations if its quotas are not exceeded. 

*** 
Types of limits: 

- per second
- per month

***You can perform the assignment in your preferred languag ***
***

In this project we implement a rate lilmit to access and endpoint.

Getting started:

### Install Dependencies
```
npm install 
```

### Run application
- navigate to the root folder of the project and run the command below
```
node index.js
```
- open your browers and type in the url `http://localhost:3000`

### Endpoints

- **GET: /api**: This endpoint has a monthly limit set for a duration of 20 days and a maximum of 100 api calls
    - Running the endpoint calls more than 100 times in less that 20 days, you will get a message indicating you have exceeded calls.
- **GET: /api/data/:id**: This endpoint has a limit based on seconds set for a duration of 20 seconds and a maximum of 2 api calls. 
    - This endpoint takes a integer as a parameter and returns an object.
    - Running the endpoint calls more than 2 times in less that 20 seconds, you will get a message indicating you have exceeded calls.

- **POST: /api/data/**: This endpoint has a limit based on seconds set for a duration of 20 seconds and a maximum of 2 api calls. 
    - For this endpoint, we pass an object in the body with format as below

    ```json
        {
            "data": { 
                    "id": 12, 
                    "street":"some street", 
                    "apt":"Some appartment number"
                }
        }
    ```
    - You can use postman to handle the endpoint calls.
    - Running the endpoint calls more than 2 times in less that 20 seconds, you will get a message indicating you have exceeded calls.

#### Notes
When the different endpoints calls are exceeded, a message is displayed telling you that your request has been exceeded.
