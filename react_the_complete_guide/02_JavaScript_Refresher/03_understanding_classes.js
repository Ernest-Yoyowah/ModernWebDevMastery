// Classes - blueprints for objects
// they can have both properties and methods

class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  name = "Ernest";
  gender = "Male";
  myName = () => {
    console.log(this.name);
  };
}

const Person_1 = new Person("Ernest");
Person_1.myName();
Person_1.printGender();
