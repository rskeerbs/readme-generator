const fs = require("fs");
const axios = require("axios");

const api = {
  getUser(github) {

    //from class excercise
    inquirer
     .then(function({ username }) {
      const {} = response;
      const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  
      axios.get('https://api.github.com/users/${username}/repos?per_page=100').then(function(res){
        const repoNames = res.data.map(function(repo){
          return repo.name;
        
    });
  
    const repoNameStr = repoNames.join("\n");
  }
};

module.exports = api;

//GET /users/:username  do I need this?
//avatar_url for user's picture
//email for user's contact email