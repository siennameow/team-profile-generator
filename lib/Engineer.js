// Import Employee class
const Employee = require('./Employee');
//The other three classes will extend Employee.
class Engineer extends Employee {
    //In addition to Employee's properties and methods, Engineer will also have the following:
    //github—GitHub username
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    //getGithub() function
    getGithub() {
        return this.github;
    }

//getRole()—overridden to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

//exports Engineer
module.exports = Engineer;