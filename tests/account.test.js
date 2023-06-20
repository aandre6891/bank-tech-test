const Account = require("../src/account");
let account;

describe("Transaction", () => {
  beforeEach(() => {
    account = new Account();
  })
  
  test("initially the account should be empty", () => {
    expect(account.transactions).toEqual([]);
  });

  test("making a deposit of 1000 it should add the amount to the account", () => {
    account.deposit(1000, "10/01/2023");
    expect(account.transactions).toEqual([
      { amount: 1000, date: "10/01/2023", type: "deposit", balance: 1000 },
    ]);
  });

  test("making a withdrawal of 500 it should add the operation to the account", () => {
    account.withdraw(500, "14/01/2023");
    expect(account.transactions).toEqual([
      { amount: 500, date: "14/01/2023", type: "withdrawal", balance: -500 },
    ]);
  });

  test("making a deposit of 1000 it should calculate a balance of 1000", () => {
    account.deposit(1000, "10/01/2023");
    const lastOperation = account.transactions[account.transactions.length - 1];
    expect(lastOperation.balance).toEqual(1000);
  });

  test("after multiple operations it should return a balance of 2500", () => {
    account.deposit(1000, "10/01/2023");
    account.deposit(2000, "13/01/2023");
    account.withdraw(500, "14/01/2023");
    const lastOperation = account.transactions[account.transactions.length - 1];
    expect(lastOperation.balance).toEqual(2500);
  });
});
