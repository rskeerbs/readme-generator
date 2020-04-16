function generateMarkdown(data) {
  return `
  //badge
![project badge](https://img.shields.io/badge/${data.github}-${data.project}-blue)
![project badge](https://img.shields.io/badge/License-${data.license}-red)

# ${data.project}
${data.description}

## Table of Contents
* Installation
* Usage
* License
* Contributions
* Questions
  * User Profile Picture
  * User Contact Email

### Installation
${data.installation}

### Usage
${data.usage}

### License
${data.license}

### Contributions
${data.contributing}

### Questions
* User's Profile Picture
${data.avatar_url}

*User's Contact Email
${data.email}
`;
}

module.exports = generateMarkdown;

//* Installation
  //* Usage
  //* License
  //* Contributing
  //* Tests
  //* Questions
   // * User GitHub profile picture
   // * User GitHub email
