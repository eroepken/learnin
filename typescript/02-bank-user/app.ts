type BankAccount = {money: number, deposit: (value: number) => void};

let myAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
      this.money += value;
  }
};

let myself: {name: string, account: BankAccount, hobbies: string[]} = {
  name: "Max",
  account: myAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.account.deposit(3000);

console.log(myself);
