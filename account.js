class Account {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  deposit(amount, date) {
    const newBalance = this.balance += amount;
    this.transactions.push({
      amount: amount,
      date: date,
      type: "deposit",
      balance: newBalance,
    });
  }

  withdraw(amount, date) {
    const newBalance = this.balance -= amount;
    this.transactions.push({
      amount: amount,
      date: date,
      type: "withdrawal",
      balance: newBalance,
    });
  }
}

module.exports = Account;
