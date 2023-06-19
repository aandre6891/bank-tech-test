class Bank {
  constructor() {
    this.account = [];
  }

  deposit(value, date) {
    this.account.push({
      amount: value,
      date: date,
      type: "deposit",
    });
  }

  withdraw(value, date) {
    this.account.push({
      amount: value,
      date: date,
      type: "withdrawal",
    });
  }
}

module.exports = Bank;
