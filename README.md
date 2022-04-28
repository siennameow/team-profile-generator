# Team Profile Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/siennameow/team-profile-generator/blob/main/LICENSE)

## Description 📝 


A Node Command Line Interface Application developed for uses using inquirer prompts and takes in information about employees and generates an HTML webpage that displays summaries for each person. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. `npm jest` were installed and build for unit testing. 

Link to the demo video: https://drive.google.com/file/d/1hCZ1IJCcFcbhT2oLA4nlnbvA5QvgQJfx/view

## Table of Contents
- [Description 📝](#description-)
- [Preview 👀](#preview-)
- [Installation 🗳](#installation-)
- [Usage 💻](#usage-)
- [License 🚀](#license-)
- [Technologies 🔧](#technologies-)
- [Contribution 👩🏻‍💻](#contribution-)
- [Test 🧩](#test-)
- [Questions ❓](#questions-)

## Preview 👀 

This is a sample Team page for a project generated using this application

![Screen Shot 2022-04-23 at 5 30 07 PM](https://user-images.githubusercontent.com/101283174/164950802-79310d69-3828-43b2-b77f-d885a2443a47.png)

Below is the video showing the functionality of the application:

https://user-images.githubusercontent.com/101283174/164950799-64919c62-c889-4e93-a5df-2581f8296ef2.mp4


## Installation 🗳 

- Download or clone repository
- Node.js is required to run the application
- npm install to install the required npm packages
    - ` npm i `

## Usage 💻 

- Application will be invoked by using the following command:

`node index.js`

- The user will be prompted for information to select employee type

- Manager (only one is allowed to be added)

    - Engineer (any number)
    - Intern (any number)
- All employee will be asked the following information, all prompts are validated to ensure appropriate input to generate the correct output

    - Name
    - ID
    - Email
- Depending on employee role, additional prompts are presented

    - Manager - office number
    - Engineer - GitHub username
    - Intern - school
- Then a index.html page will be generated in the dist directory, that displays a nicely formatted team roster.

## License 🚀
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/siennameow/team-profile-generator/blob/main/LICENSE)

## Technologies 🔧
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Inquirer.js](https://www.npmjs.com/package/inquirer)
* [Node.js](https://nodejs.org/en/)
* [Jest](https://www.npmjs.com/package/jest)
* [Font Awesome](https://fontawesome.com/)
* [Google Fonts](https://fonts.google.com//)

## Contribution 👩🏻‍💻 
If you would like to contribute to this project reach out to me. Contact Information can be found below or by clicking on the `Questions` link provided in the Table of Contents.

## Test 🧩
The Team Profile Generator uses the Jest package to test the functionality of the four primary classes associated with the application. To run all four tests:

`npm run test`

## Questions ❓

📩 If you have any question, email me here at : lihexuan1@gmail.com<br/>
:octocat: My Github page is [siennameow](https://github.com/siennameow)

 

