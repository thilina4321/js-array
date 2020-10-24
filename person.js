class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age} years old`;
    return bio
  }
}

const person1 = new Person("Thilina", 'Dilshan', 23);
console.log(person1.getBio())