// Import Employee class
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
  
    describe("Engineer object instantiation", () => {
      it("Creates an object with name, id, email and github properties", () => {
        const engineer = new Engineer("Snow White", 2, "snowwhite@gmail.com", "applesosweet");
//same as employee
        expect(engineer).toBeInstanceOf(Engineer);
        expect(engineer.name).toEqual("Snow White");
        expect(engineer.id).toEqual(2);
        expect(engineer.email).toEqual("snowwhite@gmail.com");
        //add a github check
        expect(engineer.github).toEqual("applesosweet");
      });
    });
  
//same as employee
    describe("getName", () => {
      it("Should return the object's name property", () => {
        const engineer = new Engineer("Snow White", 2, "snowwhite@gmail.com", "applesosweet");

        expect(engineer.getName()).toEqual("Snow White");
      });
    });
  
   
    describe("getId", () => {
      it("Should return the object's id property", () => {
        const engineer = new Engineer("Snow White", 2, "snowwhite@gmail.com", "applesosweet");

        expect(engineer.getID()).toEqual(2);
      });
    });
  
  
    describe("getEmail", () => {
      it("Should return the object's email property", () => {
        const engineer = new Engineer("Snow White", 2, "snowwhite@gmail.com", "applesosweet");

        expect(engineer.getEmail()).toEqual("snowwhite@gmail.com");
      });
    });

//add getGithub function test
    describe("getGithub", () => {
        it("Should return the object's github property", () => {
          const engineer = new Engineer("Snow White", 2, "snowwhite@gmail.com", "applesosweet");

          expect(engineer.getGithub()).toEqual("applesosweet");
        });
      });

    describe("getRole", () => {
      it("Should return the string 'Engineer'", () => {
        const engineer = new Engineer("Snow White", 2, "snowwhite@gmail.com", "applesosweet");

        expect(engineer.getRole()).toEqual("Engineer");
      });
    });
  });