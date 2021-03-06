# cm-back-end

[![<kalilReis>](https://circleci.com/gh/kalilReis/cm-back-end.svg?style=svg)](https://circleci.com/gh/kalilReis/cm-back-end)

This is the backend part of the app proposed as a test for Coteminas Dev Team.  

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing?

    git clone  https://github.com/kalilReis/cm-back-end.git
    cd cm-back-end
    yarn install
    

#### Don't forget to provide the MONGODB_URI environment variable with the mongodb URI like:

    mongodb://[username:password@]host1[:port1][/[database][?options]]

this project uses dotenv so you can create a file named .env and add the enviroment variable there!

### Running
    yarn build
    yarn start

### Dev mode 
    yarn dev
   
### You can see this project running at:

aws: [http://ec2-13-59-33-83.us-east-2.compute.amazonaws.com/products](http://ec2-13-59-33-83.us-east-2.compute.amazonaws.com/products)

### or

heroku: [https://cm-back-end.herokuapp.com/products](https://cm-back-end.herokuapp.com/products)

### How to use it?

    //request
    curl -GET http://localhost:8080/products?q=4pH65FxlKrip4L3S9Kw&limit=4&page=1

    //response
    {
        "docs":[
            {
                "imageLinks":[],
                "_id":"5e163c2c0ae5890066f9c4bf",
                "name":"4pH65FxlKrip4L3S9Kw",
                "type":"ELqaT78J0Tc8vORrk0r",
                "size":"fKk8MXjWRoPF4Np1Hp8",
                "currentPrice":"1",
                "previousPrice":"2",
                "__v":0,
                "createdAt":"2020-01-08T20:31:40.116Z",
                "updatedAt":"2020-01-08T20:31:40.116Z",
                "score":1.1
            }
        ],
        "totalDocs":1,
        "limit":10,
        "totalPages":1,
        "page":1,
        "pagingCounter":1,
        "hasPrevPage":false,
        "hasNextPage":false,
        "prevPage":null,
        "nextPage":null
    }
