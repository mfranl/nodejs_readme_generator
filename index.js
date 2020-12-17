'use strict';
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const generate = require('./utils/generateMarkdown.js')


console.log('Lets generate a readme!')
 // array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: `What is the title of your project?`,
    },
    {
        type: 'input',
        name: 'github',
        message: `What's your GitHub User Name?`,
        
    },
    {
        type: 'input',
        name: 'email',
        message: `What's your email address?`,
        validate: function (value) {
            let pass = value.match(
              /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            );
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address!';
          },
    },
    {
        type: 'input',
        name: 'description',
        message: `Please write a description of your project.`,
        
    },
    {
        type: 'confirm',
        name: 'install',
        message: `Do you want to add any installation notes?`,
        
    },
    {
        type: 'input',
        name: 'installNotes',
        message: `Please add your installation notes.`,
        when: function (answers) {
            return answers.install;
          }
    },
    {
        type: 'confirm',
        name: 'usage',
        message: `Do you want to provide the user usage information?`,
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: `Please add your usage info.`,
        when: function (answers) {
            return answers.usage;
          }
    },
    {
        type: 'confirm',
        name: 'contrib',
        message: `Do you want to add any notes on contributing to the repo?`,
    },
    {
        type: 'input',
        name: 'contribNotes',
        message: `Please add your what you want the user to know about contributing to the repo.`,
        when: function (answers) {
            return answers.contrib;
          }
    },
    {
        type: 'confirm',
        name: 'test',
        message: `Do you want to add instructions for running tests?`,
    },
    {
        type: 'input',
        name: 'testNotes',
        message: `Please add your instructions for running tests.`,
        when: function (answers) {
            return answers.contrib;
          }
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Which open source license would you like to use? ',
        choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-CLause', 'GNU AGPLv3.0', 'GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0'],
    },
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README generated')
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data)
        
        writeToFile('./output/README.md', generateMarkdown(data));
        // console.log(JSON.stringify(data, null, '  '));
        // writeToFile('./output/README.md', JSON.stringify(data))
      });
      
}

// function call to initialize program
init();

