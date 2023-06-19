class Bank {
  constructor() {
    this.account = [];
    this.balance = 0;
  }

  deposit(amount, date) {
    const newBalance = this.balance += amount;
    this.account.push({
      amount: amount,
      date: date,
      type: "deposit",
      balance: newBalance,
    });
  }

  withdraw(amount, date) {
    const newBalance = this.balance -= amount;
    this.account.push({
      amount: amount,
      date: date,
      type: "withdrawal",
      balance: newBalance,
    });
  }

  printStatement() {
    console.log("date || credit || debit || balance");
    const statement = this.account.reverse().map((transaction) => {
      if (transaction.type === "withdrawal") {
        console.log(transaction.date + " || || " + transaction.amount.toFixed(2) + " || " + transaction.balance.toFixed(2));
      } else {
        console.log(transaction.date + " || " + transaction.amount.toFixed(2) + " || || " + transaction.balance.toFixed(2));
      }
    });
  }
}

module.exports = Bank;

const bank = new Bank();

bank.deposit(1000, '10/01/2023');
bank.deposit(2000, '13/01/2023');
bank.withdraw(500, '14/01/2023');

bank.printStatement();
