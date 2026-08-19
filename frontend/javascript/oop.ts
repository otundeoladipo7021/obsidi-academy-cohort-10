// TypeScript
class Customer {
  // TS allows actual 'private' and 'public' keywords
  private firstname: string;
  private lastname: string;

  constructor(firstName: string, lastName: string) {
    this.firstname = firstName;
    this.lastname = lastName;
  }

  public getName(): string {
    return `The customer's first name is ${this.firstname}, and their last name is: ${this.lastname}`;
  }
}

let newCustomer: Customer = new Customer("John", "Doe");
// console.log(newCustomer.firstname); // TS Error: Property 'firstname' is private
console.log(newCustomer.getName());

// npm install -D tsx
// npx tsx /Users/aquibajani/Academy/obsidi-academy-cohort-10/frontend/javascript/oop.ts
