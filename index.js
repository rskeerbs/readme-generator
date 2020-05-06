const fs = require('fs');
const inquirer = require('inquirer');
const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown');


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
    

  ];

  async function init(){
    try {
      const answers = await inquirer.prompt(questions);
      const githubData  = await api.getUser(answers.github);
      
      let userData = {
        github: answers.github,
        project: answers.project,
        description: answers.description,
        license: answers.license,
        installation: answers.installation,
        test: answers.test,
        usage: answers.usage,
        contributing: answers.contributing,
        avatar_url: githubData.data.avatar_url,
        email: githubData.data.email
      }
      let content = generateMarkdown(userData)
       console.log(content)
       
    } catch (err) {
      console.log(err)
    }

    writeToFile(content)

    function writeToFile(data) {
      return fs.writeFileSync(path.join(process.cwd(), README.md), data);
      console.log("File written sucessfully!")
    }

  init()
