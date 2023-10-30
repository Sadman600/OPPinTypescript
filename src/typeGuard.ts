function users(user: NormalUser | AdminUser): string {
  if ("role" in user) {
    return `I am ${user.name} user and my role ${user.role} `;
  } else {
    return `i am ${user.name} and normal user`;
  }
}

type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: string;
};
const normalUser: NormalUser = {
  name: "Mr.X",
};
const adminUser: AdminUser = {
  name: "Mr.Y",
  role: "admin",
};

console.log(users(adminUser));

class Animal {
  constructor(public name: string, public species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log("make sound");
  }
}

class Dog extends Animal {
  constructor(public name: string, public species: string) {
    super(name, species);
  }
  makeDogSound() {
    console.log(`this ${this.name} sound ${this.species}`);
  }
}
class Cat extends Animal {
  constructor(public name: string, public species: string) {
    super(name, species);
  }
  makeCatSound() {
    console.log(`this ${this.name} sound ${this.species}`);
  }
}
function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}
function isCat(animal: Animal): animal is Cat {
  return animal instanceof Cat;
}
function getAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.makeDogSound();
  } else if (isCat(animal)) {
    animal.makeCatSound();
  } else {
    animal.makeSound();
  }
}
const animan1 = new Dog("Dogy", "german");
const animan2 = new Cat("Bul", "Brazil");

getAnimal(animan1);
getAnimal(animan2);
