// JavaScript
// To define a class, you use the class keyword followed by the name of that class.
class Bootcamp {
  // Inside the class, we define a constructor that takes in parameters. In this case, we're only taking in one param, but we could take in as many as necessary:
  constructor(name) {
    // Inside the constructor, we set the values for the objects that will be created from this class using the this keyword:
    this.name = name;
  }
}

// To utilize our class to make a new object, all we have to do is instantiate a variable and use the new keyword. We pass in the parameters it needs, and that's it:
let myCamp = new Bootcamp("Academy");

function displayData() {
  // We can now access the object in its entirety like so:
  console.log(myCamp); // prints the entire object
  // Or by accessing individual elements using dot notation:
  console.log(myCamp.name); // prints "Academy"
  // Works similarly in JS and TS
}

setTimeout(() => {
  displayData();
}, 3000);
// displayData();
