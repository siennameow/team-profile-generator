//import classes
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Employee = require('../lib/Intern')

//function to write the html page
function generateHTML (team) {
    `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Our Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Merriweather|Muli:300" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">Our <span>Team</span></h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center mt-5">
                ${createCards(team)}
                </div>
            </div>
        </div>
    </body>
    
    </html>
    `
}
//function to write manager card

//function to write engineer card

//function to write intern card

//function to generate employee card
function createCards(team) {
    let cards = []
    for(let i = 0; i < team.length; i++) {
      const thisEmployee = team[i];
      switch(thisEmployee.getRole()) {
        case 'Manager':
          const manager = new Manager(thisEmployee.id, thisEmployee.name, thisEmployee.email, thisEmployee.officeNumber);
          cards.push(generateManagerCard(manager));
          break;
        case 'Engineer':
          const engineer = new Engineer(thisEmployee.id, thisEmployee.name, thisEmployee.email, thisEmployee.github);
          cards.push(generateEngineerCard(engineer));
          break;
        case 'Intern':
          const intern = new Intern(thisEmployee.id, thisEmployee.name, thisEmployee.email, thisEmployee.school);
          cards.push(generateInternCard(intern));
          break;
      }
    }
    return cards.join(``)
  }

//export generateHTML
module.exports = generateHTML;