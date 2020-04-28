const fs = require("fs");
const axios = require("axios");

const api = {
  getUser(github) {

    //from class excercise
    return axios.get(`https://api.github.com/users/${github}`)
  
  }
};

module.exports = api;

//GET /users/:username  do I need this?
//avatar_url for user's picture
//email for user's contact email