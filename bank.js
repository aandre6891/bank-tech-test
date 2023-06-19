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

    if (this.account.length >= 1) {
      const lastOperation = this.account[this.account.length - 1];
      previousBalance = lastOperation.balance;
    } else {
      previousBalance = 0;
    }

    if (type === "deposit") {
      return previousBalance + value;
    } else {
      return previousBalance - value;
    }
  }
}

module.exports = Bank;
