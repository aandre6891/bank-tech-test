class Bank {
  constructor() {
    this.account = [];
  }

  deposit(value, date) {
    const newBalance = this.calculateBalance(value, "deposit");
    this.account.push({
      amount: value,
      date: date,
      type: "deposit",
      balance: newBalance,
    });
  }

  withdraw(value, date) {
    const newBalance = this.calculateBalance(value, "withdrawal");
    this.account.push({
      amount: value,
      date: date,
      type: "withdrawal",
      balance: newBalance,
    });
  }

  calculateBalance(value, type) {
    let previousBalance = 0;
    const lastOperation = this.account[this.account.length - 1];
    this.account.length ? previousBalance = lastOperation.balance : previousBalance = 0;
    return type === "deposit" ? previousBalance + value : previousBalance - value;
  }

  printStatement() {
    console.log("date || credit || debit || balance");
    const statement = this.account.reverse().map((operation) => {
      if(operation.type === "withdrawal") {
        console.log(operation.date + " || || " + operation.amount.toFixed(2) + " || " + operation.balance.toFixed(2));
      } else {
        console.log(operation.date + " || " + operation.amount.toFixed(2) + " || || " + operation.balance.toFixed(2));  
      }
    })
  } 
}

module.exports = Bank;

const bank = new Bank();
bank.deposit(1000, "10/01/2023");
bank.deposit(2000, "13/01/2023");
bank.withdraw(500, "14/01/2023");
bank.printStatement();
