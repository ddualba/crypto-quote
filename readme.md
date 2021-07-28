#Crypto Quote#

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

- the project is public and its purpose if for educational and testing purposes
  only.
- This project pulls the current prices of various crypto coins entered into the
  search string
- the client directory contains front end code and uses axios to send a post
  request to backend api.
- coin market cap api key info is entered into dotenv file, to use code for your
  own purposes secure your own API key
- the backend routes file can hit the coin market cap api with an axios call to
  the live api or to the sandbox api (which will not count against your daily
  limits). comment out which ever endpoint you are not using.

## Technologies

For Backend, Project is created with:

- NodeJS and Express 4.17.1
- dotenv to store private info, axios for api calls

For Frontend, Project is created with:

- react 17.0.2
- material-ui/core 4.11.4
- material-ui/data-grid 4.0.0-alpha.33
- axios 0.21.1

## Setup

To run this project, install it locally using npm:

- this project uses the 'concurrently' package to launch server and client with
  one command

```
$ cd ../crypto-quote-api
$ npm install

$ cd into client directory
$ npm install

$ return to /crypto-quote-api
$ npm run dev
```
