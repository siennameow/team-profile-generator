//The first class is an Employee parent class with the following properties and methods:
class Employee {
    //name,id,email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

//getName() function
getName() {
    return this.name;
}

//getId() function
getID() {
    return this.id;

}

//getEmail() function
getEmail() {
    return this.email;

}

//getRole()—returns 'Employee'
getRole() {
    // Returns "Employee"
    return "Employee";
}
};

//exports Employee
module.exports = Employee;

