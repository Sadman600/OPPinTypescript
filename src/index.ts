class Car {
  name: string;
  year: string;
  constructor(name: string, year: string) {
    this.name = name;
    this.year = year;
  }

  myCar() {
    console.log(`my car ${this.name} old is ${this.year}`);
  }
}
