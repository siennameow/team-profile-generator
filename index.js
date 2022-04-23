
// import bnode modules 
const inquirer = require("inquirer");
const fs = require("fs");
//import classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// team array
const team = [];

//WHEN I start the application
//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
//function to start of manager prompts
const addManager = () => {
  inquirer.prompt([
        {
        name: 'role',
        type: 'confirm',
        message: `
    =================
        Welcome to the Team Profile Generator! Are you ready to begin?
    =================
        `
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team manager\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager\'s office number?',
        },
        //WHEN I enter the team manager’s name, employee ID, email address, and office number
        //THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
        //function to add an employee
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
    .then((managerAnswers) => {
    
        const manager = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.officeNumber)
        team.push(manager)
        switch(managerAnswers.addMember) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default: 
            writeToFile('dist/index.html', generateTeam(team))
        }
    });
}

//WHEN I select the engineer option
//THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// function to add engineer prompt
const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s GitHub username?',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.id, engineerAnswers.name, engineerAnswers.email, engineerAnswers.github)
        team.push(engineer)
        switch(engineerAnswers.addMember) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default: 
            writeToFile('dist/index.html', generateTeam(team))
        }
    })
}
//WHEN I select the intern option
//THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// function to add intern prompt
const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.id, internAnswers.name, internAnswers.email, internAnswers.school)
        team.push(intern)
        switch(internAnswers.addMember){
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                writeToFile('dist/index.html', generateTeam(team))
        }
    })
}

// init the app
addManager();

//WHEN I am prompted for my team members and their information
//THEN an HTML file is generated that displays a nicely formatted team roster based on user input
//function to generate HTML page file 
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('Your team profile has been successfully created! Please check out the index.html under the dist folder')
    });
};

//WHEN I click on an email address in the HTML
//THEN my default email program opens and populates the TO field of the email with the address

//WHEN I click on the GitHub username
//THEN that GitHub profile opens in a new tab

//Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.