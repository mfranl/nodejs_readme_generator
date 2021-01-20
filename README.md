# NODE.JS README Generator 
Homework #09 - Node.JS: Professional README Generator

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/natemking/readme_generator_node/blob/main/LICENSE)

![node.js badge](https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white)


[App Demo Video](https://youtu.be/ukyjAsLClYU)

---

## Table of Contents
 * [Description](#description)
    + [Scope of Work](#scope-of-work)
    + [Node.js functionality](#nodejs-functionality)
  * [Screenshots](#screenshots)
  * [License](#license)
  * [Credits](#credits)

## Description
### Scope of Work
The user has requested a quicker and more efficient way of making their README markdown files. They want a node.js generator accessed via CLI that prompts them for their input for the standard sections and criteria of a README file. When they have finished adding their data for their README, the file will be generated as a markdown. 

### Node.js Functionality
The generator was written in Node.js utilizing mostly the Inquirer module for a large portion of its functionality. 

The app starts with the user being given a welcome message. This is an array of one inquirer confirm object. I wanted to present the user with a bit of a greeting before throwing them right into the meat of the app. Once the user is ready and hits 'y', I have a console log display a very small syntactical cheat sheet just in case the user wants to add some flair, links, or images as they generate the README. 

Next, the user is walked through a set of questions that requires their input. I utilized regex to use validate to make sure the use puts in a valid email. The sections title, table of contents, description, license, & questions are required. In the remaining sections, the user is given the choice if they would like to like to add each section. If they select yes the next question asks for them to input their data. If they choose no a confirm for the next section appears and the section they are not including does not appears in the table of contents. 

Once the majority of the section selections are completed the user is presented with the license options. They can choose from eight of the most popular open-source licenses. After choosing a license a the respective license badge will be at the top of the README and a license section with text stating what license was chosen will be created. There is also a copyright added with a year. That year is brought in via `newDate()` to not have the date hardcoded for future use of the app. 

Lastly, the user is prompted with adding a credits section. This section was the most difficult because I wanted the user to be able to put in as many credits as they see fit. With that, I had to create a loop of some sort and I could not find the solution with Inquirer alone. I initially found an inquirer plug-in that allowed for the recursion I needed but much to my chagrin, the UI of the output was not polished. I then was able to find a chunk of code in that plug-ins issues section of its repo that, not only, did what I needed but looked correct. I decided to use that code (credits below) and create my own module to call on this functionality. Now the user can add as many or as few credits as they need. 

The instructions to generate the README are a custom module as well. I would like to take credit for this but I cannot as that framework was set up in the assignment when given to me. I did, however, write all the necessary code to take in the user input data and add it to the `generateMarkdown()` function to create the file. 

Lastly, I used an async/await function to handle the promises and then finally generate the README which is written to the './output/' folder in the repo.



## Screenshots

![README generator demo](./assets/images/screenshots/node_js_readme_generator.gif)
<br>
_README Generator Demo_
<br>

## License

Licensed under the GNU GPLv3.0 License. Copyright © 2020

## Credits


* [Inquirer NPM Module](https://www.npmjs.com/package/inquirer)

* [Badges for licenses](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

* [Regex to validate email address](https://sigparser.com/developers/email-parsing/regex-validate-email-address/)

* [Adding mailto in markdown](https://github.com/github/markup/issues/1030)

* [Getting the current year to display](https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript)

* [Get input field to accept only numbers](https://stackoverflow.com/questions/19508183/how-to-force-input-to-only-allow-alpha-letters)

* [Inquirer-recursive plug-in](https://www.npmjs.com/package/inquirer-recursive)

* [Code for custom recursive prompt functionality](https://github.com/nathanloisel/inquirer-recursive/issues/1#issuecomment-456701056)

---

GitHub: [@natemking](https://github.com/natemking/)

Email: [natmeking@gmail.com](mailto:natmeking@gmail.com)

