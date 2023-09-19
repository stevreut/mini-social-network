# Mini Social Network

A demonstration social network back-end supported by a MongoDB/Mongoose database

## Description

This is an implementation of a demonstration miniature "social network" application, but with only the most minimal RESTful API interface and, at present, no corresponding front-end implementation.  Its purpose is to demonstrate the ability of support the various API http (TODO) request paths via Express, Node.js, and a MongoDB database (as encapsulated by mongoose).


Key features of the application:
- **a modified MVC organization** with all data modelling in the /models directory and all routing and higher-level processing logic in the /controllers directory.  (As there is no front-end, there is no "models" layer nor corresponding /models directory.)
        
    A slight variation from similarly layered past efforts is the creation of a /controllers/controllers (nested) directory, this having been done in order to better isolate the various controller scripts from the routing scripts.  
    
- **[MongoDB](https://www.mongodb.com/)/[mongoose](https://mongoosejs.com/)** - An underlying MongoDB database which is entirely encapsulated via the Mongoose package.  (Consequently no direct npm install of MongoDB is required.)
- **[Express JS](https://expressjs.com/)** - Intercepts and handles all http(TODO) requests
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
2. *OPTIONAL:* Once in the `mini-social-network-main` directory, `npm run seed` to seed the database with initial values designed for demonstration.  (The application will work find without this step, but the database collections will initally be empty in that case.)
3. From within the `mini-social-network` directory, issue the instruction `npm run start` to run the server locally.
4. Using a web browser on the local platform, access the server/app via URL `http://localhost:3001/` (suffixed with appropriate URL suffixes as shown in the [demo](TODO)).  Alternatively, use [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/), or any equivalent requestor application to access the same URL paths.

   URL paths available are:

## Testing / Demonstration

**Note** that a demonstration video can be found on *YouTube* by [following this link](https://www.youtube.com/watch?v=TODO).
## Credits

Special thanks to the teaching staff of the University of Pennsylvania Full Stack Coding Boot Camp (UPENN-VIRT-FSF-FT-07-2023-U-LOLC-M-F).

// TODO - see attribution notes at end

- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [NodeJS Documentation](https://nodejs.dev/en/api/v20/documentation/)
- [MDN guide to SVG files](https://developer.mozilla.org/en-US/docs/Web/SVG)
- [WC3 - CSS Color Module Level 4 - Named Colors](https://www.w3.org/TR/css-color-4/#typedef-named-color)
- [function colourNameToHex](https://stackoverflow.com/questions/1573053/javascript-function-to-convert-color-names-to-hex-codes#1573141) by [Stackoverflow user *Greg*](https://stackoverflow.com/users/24181/greg)

## License

As of this date (19 September 2023), no licensing policy has been established for this project or its repository.




## TODO


TODO - attributes:
    activity 25 - particularly userController.js
    mongoose
    dayjs
            //   `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`   - TODO - attribute in README.md - borrowed from Module 17 Challenge (used in models/User.js)

    // TODO - also be sure to attribute:  https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax

// TODO - also attribute: https://www.youtube.com/watch?v=DZBGEVgL2eE

// TODO - DB name: miniSocialNetDB



// TODO - FINAL TODO: delete temporary resources, reference YouTube video in README
