// Import Employee class
const Employee = require('./Employee');
//The other three classes will extend Employee.
class Intern extends Employee {
    //In addition to Employee's properties and methods, Intern will also have the following:
    //school
    constructor(name, id, email, school) {
        // Get methods from Employee class
        super(name, id, email);
        this.school = school;
    }    

    //getSchool() function
    getSchool() {
        return this.school;

    };

    //getRole()—overridden to return 'Intern'
    getRole() {
        return "Intern";
    }
};

//exports Intern
module.exports = Intern;
