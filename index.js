// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

const path = require('path');
// TODO: Create a function to write README file
// save function was working but I broke it and cant fix it :(
function writeToFile(fileName, data) {
    fs.writeFile('C:/Users/Ross/Desktop/generatedREADME/' + fileName, data, (err) =>
        err ? console.error(err) : console.log('README file generated successfully!')
    );
}

// TODO: Create a function to initialize app
function init() {
    // Prompt the user with questions and store the answers in an object
    inquirer.prompt(questions).then((answers) => {
        // Generate a markdown string based on the user's answers
        const markdown = `
# ${answers.title}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## License

This project is licensed under the ${answers.license} license.

## Questions

For questions or comments, please contact ${answers.github} at ${answers.email}.
`;   
});
}

// Function call to initialize app
init();
