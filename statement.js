class Statement {

  print(transactions) {
    console.log("date || credit || debit || balance");
    transactions.reverse().map((transaction) => {
      if (transaction.type === "withdrawal") {
        console.log(transaction.date + " || || " + transaction.amount.toFixed(2) + " || " + transaction.balance.toFixed(2));
      } else {
        console.log(transaction.date + " || " + transaction.amount.toFixed(2) + " || || " + transaction.balance.toFixed(2));
      }
    });
  }
}

module.exports = Statement;