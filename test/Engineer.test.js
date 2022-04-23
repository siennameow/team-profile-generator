// Import Employee class
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
  
    describe("Engineer object instantiation", () => {
      it("Creates an object with name, id, email and github properties", () => {
        const engineer = new Engineer("Apple Sweet", 1, "applesweet@gmail.com", "applesosweet");
//same as employee
        expect(engineer).toBeInstanceOf(Engineer);
        expect(engineer.name).toEqual("Apple Sweet");
        expect(engineer.id).toEqual(1);
        expect(engineer.email).toEqual("applesweet@gmail.com");
        //add a github check
        expect(engineer.github).toEqual("applesosweet");
      });
    });
  
//same as employee
    describe("getName", () => {
      it("Should return the object's name property", () => {
        const engineer = new Engineer("Apple Sweet", 1, "applesweet@gmail.com", "applesosweet");

        expect(engineer.getName()).toEqual("Apple Sweet");
      });
    });
  
   
    describe("getId", () => {
      it("Should return the object's id property", () => {
        const engineer = new Engineer("Apple Sweet", 1, "applesweet@gmail.com", "applesosweet");

        expect(engineer.getID()).toEqual(1);
      });
    });
  
  
    describe("getEmail", () => {
      it("Should return the object's email property", () => {
        const engineer = new Engineer("Apple Sweet", 1, "applesweet@gmail.com", "applesosweet");

        expect(engineer.getEmail()).toEqual("applesweet@gmail.com");
      });
    });

//add getGithub function test
    describe("getGithub", () => {
        it("Should return the object's github property", () => {
          const engineer = new Engineer("Apple Sweet", 1, "applesweet@gmail.com", "applesosweet");

          expect(engineer.getGithub()).toEqual("applesosweet");
        });
      });

    describe("getRole", () => {
      it("Should return the string 'Engineer'", () => {
        const engineer = new Engineer("Apple Sweet", 1, "applesweet@gmail.com", "applesosweet");

        expect(engineer.getRole()).toEqual("Engineer");
      });
    });
  });