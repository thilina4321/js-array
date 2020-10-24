class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age} years old`;
    return bio;
  }
}

class Employee extends Person{
    constructor(firstName, lastName, age, likes=[], position){
        super(firstName, lastName, age, likes)
        this.position = position
    }
    
    getBio(){
        return `${this.firstName} is a ${this.position}`
    }
}

const person1 = new Employee("Thilina", "Dilshan", 23, [], 'Student');
console.log(person1.getBio());
