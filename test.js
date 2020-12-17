const { timeStamp } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');

inquirer.registerPrompt('confirm-validated', require('inquirer-confirm-validated'));

inquirer.prompt(
{
  name: 'test',
  message: 'fuck me?',
  type: 'confirm-validated',
  validate: function (answers) {  
    if (answers === 'y'){
      console.log('sup')
    }
    console.log(answers.test);
   
  },

});