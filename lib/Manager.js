// Import Employee class
const Employee = require('./Employee');
//The other three classes will extend Employee.
class Manager extends Employee {
    //In addition to Employee's properties and methods, Manager will also have the following:
    //officeNumber
    constructor(name, id, email, officeNumber) {
        // Get methods from Employee class
        super(name, id, email);
        this.officeNumber = officeNumber;
    }    

//getRole()—overridden to return 'Manager'
    getRole() {
        return "Manager";
    }
//getOfficeNumber () function
    getOfficeNumber() {
        return this.officeNumber;
    }
}

//exports Manager
module.exports = Manager;
