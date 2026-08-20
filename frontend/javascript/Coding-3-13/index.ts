// Declare a constant variable using the "const" keyword
const PI: number = 3.14159;

// Define a class using the "class" keyword
class Shape {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(x: number, y: number) {
    this.x += x;
    this.y += y;
  }
}

// Define a subclass that extends the "Shape" class
class Circle extends Shape {
  private radius: number;
  constructor(x: number, y: number, radius: number) {
    super(x, y);
    this.radius = radius;
  }

  get area() {
    return PI * this.radius * this.radius;
  }
  set diameter(diameter: number) {
    this.radius = diameter / 2;
  }
}

// Create an instance of the "Circle" class
let myCircle = new Circle(10, 10, 5);

// Call the "move" method on the "circle" instance
myCircle.move(20, 20);

// Print the area of the circle using the "area" getter
console.log(myCircle.area);

// Set the diameter of the circle using the "diameter" setter
myCircle.diameter = 20;

// Print the area of the circle again
console.log(myCircle.area);
