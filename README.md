[![<kalilReis>](https://circleci.com/gh/kalilReis/cm-back-end.svg?style=svg)](https://circleci.com/gh/kalilReis/cm-back-end)

# What is that?

This is the backend part of an app where you can searchs for products by combined fields like "Cama de Solteiro" and get the result paginated.

### How to run it?

    git clone  https://github.com/kalilReis/cm-back-end.git
    cd cm-back-end
    yarn install
    yarn build
    yarn start

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
