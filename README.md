## Cory Martin's Emma Project - Backend API server
---

#### To run the project

1. $ ```git clone https://github.com/murribu/emma-backend```
2. $ ```cd emma-backend```
3. $ ```npm install```
4. $ ```npm start```
5. Visit / - you should see "it works"
6. To actually use the service, send a POST request to / with a package with the following structure: {"urls":["https://google.com","http://notavalidurlihopeasdfasdfasdfasdf.net", "www.yaho.c", "qwer"]}

#### To run tests

1. $ ```npm test```
2. Visit [http://0.0.0.0:8081](http://0.0.0.0:8081) in the browser you'd like to test.

#### Explanation of npm packages
As you can see in [package.json](https://github.com/murribu/emma-backend/package.json), I loaded the following npm packages:

1. [express](https://www.npmjs.com/package/express) - handles http requests
2. [request-promise](https://github.com/request/request-promise) - sends http requests from the backend process and handles the response with a promise
3. [body-parser](https://www.npmjs.com/package/body-parser) - facilitates handling an http request's parameters
4. [karma](https://www.npmjs.com/package/karma) - allows running JS tests in a browser
5. [chai](https://www.npmjs.com/package/chai) - provides an assertion library
6. [browserify](https://www.npmjs.com/package/browserify) - simplifies the 'require' method in importing node modules
