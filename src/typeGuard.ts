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
  makeDogSound() {
    console.log(`this ${this.name} sound ${this.species}`);
  }
}
