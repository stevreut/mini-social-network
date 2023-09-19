# Mini Social Network

TEST VERBIAGE TO CHECK GIT/GITHUB 9/19 2:05 P.M. (TODO)

## Description

A NodeJS application which ... TODO

- Key features of the application are:
    - use of a *Shape* superclass representing objects with a 
    defined center point and color, and that have a render() method that returns an SVG element (string) representing that shape.  *Shape* is an **abstract** class and, thus, has no implementation for the render() method, only a no-op
    render() method which is expected to be overridden by any
    subclasses of *Shape*.
    - use of several specific *Shape* subclasses:
        - *Circle*
        - *Nautilus*
        - *Square*
        - *Text*
        - *Triangle*

        Each of these child classes produces an SVG sub-element (as a string) that represents a *centered* rendering of the shape in question and having the specified color.
    - use of an HtmlColorValidator class which is used to determined with a given string value is a valid name for an HTML color, such names being either one of the color names from the CSS standard or a color hex code.
    - use of the *inquirer* package for purposes of prompting the user for input.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

1. Install NodeJS if it is not already installed.
2. from the [mini-social-network repository of GitHub](https://github.com/stevreut/mini-social-network):
    - select the green "**<> Code**" button
    - select the "**Download ZIP**" button from the resulting pop-up dialog
3. Placed the resulting `mini-social-network-main.zip` file in the location of your choice.
4. Unpack the `mini-social-network-main.zip` file, which should resulting in a folder/directory with name `mini-social-network-main`:
    - on Mac: double-click
    - on Windows: right-click and [follow these instructions](https://support.microsoft.com/en-us/windows/zip-and-unzip-files-f6dde0a7-0fec-8294-e1d3-703ed85e7ebc)
5. Using bash, Mac terminal, or equivalent utility:
    - `cd` to the resulting `mini-social-network-main` directory
    - `npm install` (to install "jest" and "inquirer") 

## Usage

1. Using bash, Mac terminal, or equivalent utility: cd to the "mini-social-network-main" directory
2. Once in the "mini-social-network-main" directory, node index.js to run the application.
3. You will be prompted for each of the following:
    - *"What are your initials? (no more than 3)?"*
        - (Input will be automatically trimmed of excess spaces and shifted to upper case.)
    - *"What should be the color of the initials? (can be color name or color hex code)"*
    - *"Choose a shape for the background (Use arrow keys)"*
        - Note that a selection is made using the up-arrow or down-arrow keys and [enter]
    - *"Color of background shape (can be color name or color hex code)"*
4. Once all four questions have been answered, a file `logo.svg` will be produced in the same directory in which the application was run.  (Note that any pre-existing `logo.svg` file in the same directory will be overwritten.)
5. Note that no response from the user will be rejected *per se*; however responses which are not acceptable are overridden - specifically:
    - If no initials are entered then "XYZ" is used instead.
    - If too many initials are entered then only the first three are used.
    - If an invalid color name or hex code is entered then the color black is used instead.

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
