# Mini Social Network

A demonstration social network back-end supported by a MongoDB/Mongoose database

## Description

This is an implementation of a demonstration miniature "social network" application, but with only the most minimal RESTful API interface and, at present, no corresponding front-end implementation.  Its purpose is to demonstrate the ability of support the various API http request paths via Express, Node.js, and a MongoDB database (as encapsulated by mongoose).


Key features of the application:
- **a modified MVC organization** with all data modelling in the /models directory and all routing and higher-level processing logic in the /controllers directory.  (As there is no front-end, there is no "models" layer nor corresponding /models directory.)
        
    A slight variation from similarly layered past efforts is the creation of a /controllers/controllers (nested) directory, this having been done in order to better isolate the various controller scripts from the routing scripts.  
    
- **[MongoDB](https://www.mongodb.com/)/[mongoose](https://mongoosejs.com/)** - An underlying MongoDB database which is entirely encapsulated via the Mongoose package.  (Consequently no direct npm install of MongoDB is required.)
- **[Express JS](https://expressjs.com/)** - Intercepts and handles all http requests
- **[Day.js](https://day.js.org/)** - The date and time handling package used (on a very limited basis) to present Javascript/NodeJS dates in a more human-readable format.
- **[Node.js®](https://nodejs.org/en)** - The Javascript server-side dialect in which this application, including all of the above packages, is written.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing/Demonstration](#testing--demonstration)
- [Credits](#credits)
- [License](#license)

## Installation

1. Install Node.js® if it is not already installed.    ([Node downloads](https://nodejs.org/en/download))
2. from the [mini-social-network repository of GitHub](https://github.com/stevreut/mini-social-network):
    - select the green "**<> Code**" button
    - select the "**Download ZIP**" button from the resulting pop-up dialog
3. Placed the resulting `mini-social-network-main.zip` file in the location of your choice.
4. Unpack the `mini-social-network-main.zip` file, which should resulting in a folder/directory with name `mini-social-network-main`:
    - on Mac: double-click
    - on Windows: right-click and [follow these instructions](https://support.microsoft.com/en-us/windows/zip-and-unzip-files-f6dde0a7-0fec-8294-e1d3-703ed85e7ebc)
5. Using bash, Mac terminal, or equivalent utility:
    - `cd` to the resulting `mini-social-network-main` directory
    - `npm install`

## Usage

1. Using bash, Mac terminal, or equivalent utility: cd to the `mini-social-network-main` directory
2. *OPTIONAL:* In the `mini-social-network-main` directory, `npm run seed` to seed the database with initial values designed for demonstration.  (The application will work find without this step, but the database collections will initially be empty in that case.)
3. From within the `mini-social-network` directory, issue the instruction `npm run start` to run the server locally.
4. Using a web browser on the local platform, access the server/app via URL `http://localhost:3002/` (suffixed with appropriate URL suffixes as shown in the [demo](TODO)).  Alternatively, use [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/), or any equivalent requestor application to access the same URL paths.


## Testing / Demonstration

**Note** that a demonstration video can be found on *YouTube* by [following this link](https://www.youtube.com/watch?v=TODO).

## Credits

Special thanks to the teaching staff of the University of Pennsylvania Full Stack Coding Boot Camp (UPENN-VIRT-FSF-FT-07-2023-U-LOLC-M-F).

The class training materials and associated repository, especially activity 25 (*Ins_CRUD_Subdoc*) of unit 18 (*NoSQL*) were consulted extensively.  In particular, `controllers/userController.js` consists almost entirely from the similarly named component in those class materials, though adjustments were made to suit the purposes of this effort.

Similarly, the regular expression (`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`) used to validated email syntax in `models/Users.js` of this application's code was borrowed without alteration from the README.md document in the Module 17 Challenge materials. 

In addition to the code samples made available as part of the Coding Boot Camp, the following external resources were consulted:

- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [stackoverflow](https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax) discussion of valid email syntax
- [Mongoose Crash Course - Beginner Through Advanced](https://www.youtube.com/watch?v=DZBGEVgL2eE)  (YouTube, channel "Web Dev Symplified")


## License

As of this date (19 September 2023), no licensing policy has been established for this project or its repository.
