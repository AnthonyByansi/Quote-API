# Quote-API
This is a simple API for retrieving quotes. It includes two routes:

* /random: Returns a random quote
* /search: Searches for quotes by author. Accepts a author query parameter.
## Getting Started
## Clone the repository: `git clone https://github.com/AnthonyByansi/quote-api.git`
* Install the dependencies: `npm install`
* Start the server: `npm start` 
* The API will be available at `http://localhost:3000.`

## Examples
* To get a random quote: `curl http://localhost:3000/random`
* To search for quotes by author: `curl http://localhost:3000/search?author=steve%20jobs`

## Built With
* ExpressJS - A web application framework for Node.js
* Body Parser - Middleware for parsing request bodies
## License
* This project is licensed under the MIT License - see the LICENSE file for details.

