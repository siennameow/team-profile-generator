// Import Employee class
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
  
  describe("Intern object instantiation", () => {
    it("Creates an object with name, id,email and school properties", () => {
        const intern = new Intern("Seven Dwarfs", 4, "sevendwarfs@gmail.com", "University of Forest");
    
        //same as employee
        expect(intern).toBeInstanceOf(Intern);
        expect(intern.name).toEqual("Seven Dwarfs");
        expect(intern.id).toEqual(4);
        expect(intern.email).toEqual("sevendwarfs@gmail.com");
        //add a school check
        expect(intern.school).toEqual("University of Forest");
    });
  });

  //same as employee
  describe("getName", () => {
    it("Should return the object's name property", () => {
        const intern = new Intern("Seven Dwarfs", 4, "sevendwarfs@gmail.com", "University of Forest");
        expect(intern.getName()).toEqual("Seven Dwarfs");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
        const intern = new Intern("Seven Dwarfs", 4, "sevendwarfs@gmail.com", "University of Forest");
        expect(intern.getId()).toEqual(4);
    });
  });


  describe("getEmail", () => {
    it("Should return the object's email property", () => {
        const intern = new Intern("Seven Dwarfs", 4, "sevendwarfs@gmail.com", "University of Forest");
        expect(intern.getEmail()).toEqual("sevendwarfs@gmail.com");
    });
  });

  //add getSchool function test
  describe("getSchool", () => {
    it("Should return the object's school property", () => {
        const intern = new Intern("Seven Dwarfs", 4, "sevendwarfs@gmail.com", "University of Forest");
        expect(intern.getSchool()).toEqual("University of Forest");
    });
  });

  describe("getRole", () => {
    it("Should return the string 'Intern'", () => {
        const intern = new Intern("Seven Dwarfs", 4, "sevendwarfs@gmail.com", "University of Forest");
        expect(intern.getRole()).toEqual("Intern");
    });
  });
});