// Import Employee class
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


describe("Manager", () => {
  
  describe("Employee object instantiation", () => {
    it("Creates an object with name, id,email and officeNumber properties", () => {
        const manager = new Manager("Apple Sweet", 1, "applesweet@gmail.com", 20);
    
        //same as employee
        expect(manager).toBeInstanceOf(Manager);
        expect(manager.name).toEqual("Apple Sweet");
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual("applesweet@gmail.com");
        //add a officeNumber check
        expect(manager.officeNumber).toEqual(20);
    });
  });

//same as employee
  describe("getName", () => {
    it("Should return the object's name property", () => {
        const manager = new Manager("Apple Sweet", 1, "applesweet@gmail.com", 20);
        expect(manager.getName()).toEqual("Apple Sweet");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
        const manager = new Manager("Apple Sweet", 1, "applesweet@gmail.com", 20);
        expect(manager.getID()).toEqual(1);
    });
  });


  describe("getEmail", () => {
    it("Should return the object's email property", () => {
        const manager = new Manager("Apple Sweet", 1, "applesweet@gmail.com", 20);
        expect(manager.getEmail()).toEqual("applesweet@gmail.com");
    });
  });

//add getOffice function test
  describe("getOffice", () => {
    it("Should return the object's officeNumber property", () => {
        const manager = new Manager("Apple Sweet", 1, "applesweet@gmail.com", 20);
        expect(manager.getOffice()).toEqual(20);
    });
  });

  describe("getRole", () => {
    it("Should return the string 'Manager'", () => {
        const manager = new Manager("Apple Sweet", 1, "applesweet@gmail.com", 20);
        expect(manager.getRole()).toEqual("Manager");
    });
  });
});