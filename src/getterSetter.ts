class BankAccount {
  public id: string;
  public name: string;
  protected blance: number;
  constructor(id: string, name: string, blance: number) {
    this.id = id;
    this.name = name;
    this.blance = blance;
  }
  get getBlance(): number {
    return this.blance;
  }
  set setBlance(amount: number) {
    this.blance = +amount;
  }
}

const myAcc = new BankAccount("444", "jhon", 555);
myAcc.getBlance;
myAcc.setBlance = 55;
