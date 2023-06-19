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
}

module.exports = Bank;
