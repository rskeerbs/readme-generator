const fs = require('fs');
const inquirer = require('inquirer');
const api = require('../utils/api');
const generateMarkdown = require('../utils/generateMarkdown');


//ask user questions about their project

const questions = [

    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "project",
      message: "What is the project's title?"
    },
    {
      type: "input",
      name: "description",
      message: "Give a short description of your project."
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]

    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install any additional utilities?",
        default: "npm install"
      },
      {
        type: "input",
        name: "test",
        message: "What command should be used to run tests?",
        default: "npm test"
      },
      {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repository?",
      },
      {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repository?",
      }
    

  ]);

function writeToFile(fileName, data) {

}


function init() {

}
  //whenever we want to get back data from a function, we need to return it.
  return inquirer.prompt([
  async function init(){
    //const init = async () => { also works
    try {
      const answers = await promptUser();
      const html = generateHtml(answers);
      await writeFileAsync("readme.html", html);
      //the await may not be needed, but better safe than sorry
      console.log("Success");

    } catch (err) {
      console.log(err)
    }

  }
  init();

  //The README will be populated with the following:

  //* At least one badge
  //* Project title
  //* Description
  //* Table of Contents
  //* Installation
  //* Usage
  //* License
  //* Contributing
  //* Tests
  //* Questions
   // * User GitHub profile picture
   // * User GitHub email
  
   // ## Minimum Requirements
  
 // * Functional, deployed application.
  
 // * GitHub repository with a unique name and a README describing project.
  
  //* The generated README includes a bio image from the user's GitHub profile.
  
  //* The generated README includes the user's email.
  
  //* The generated README includes the following sections: 
    //* Title
   // * Description
    //* Table of Contents
   // * Installation
    //* Usage
    //* License
    //* Contributing
   // * Tests
   // * Questions
  
  //* The generated README includes 1 badge that's specific to the repository.
  
  //```
  //GIVEN the developer has a GitHub profile and a repository
  
  //WHEN prompted for the developer's GitHub username and repo specific information
  
  //THEN a README for the repo is generated
  //```
  //- - -
  
  //## Submission on BCS
  
  //You are required to submit the following:
  
  //* An animated GIF demonstrating the app functionality
  
  //* A generated PDF of your GitHub profile
  
  //* The URL of the GitHub repository