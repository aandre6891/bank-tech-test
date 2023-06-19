const Bank = require("./bank");

describe("Bank", () => {
  test("initially the account should be empty", () => {
    const bank = new Bank();
    expect(bank.account).toEqual([]);
  });

  test("making a deposit of 1000 it should add the amount to the account", () => {
    const bank = new Bank();
    bank.deposit(1000, "10/01/2023");
    expect(bank.account).toEqual([
      { amount: 1000, date: "10/01/2023", type: "deposit", balance: 1000 },
    ]);
  });

  test("making a withdrawal of 500 it should add the operation to the account", () => {
    const bank = new Bank();
    bank.withdraw(500, "14/01/2023");
    expect(bank.account).toEqual([
      { amount: 500, date: "14/01/2023", type: "withdrawal", balance: -500 },
    ]);
  });

  test("making a deposit of 1000 it should calculate a balance of 1000", () => {
    const bank = new Bank();
    bank.deposit(1000, "10/01/2023");
    const lastOperation = bank.account[bank.account.length - 1];
    expect(lastOperation.balance).toEqual(1000);
  });

  test("after multiple operations it should return a balance of 2500", () => {
    const bank = new Bank();
    bank.deposit(1000, "10/01/2023");
    bank.deposit(2000, "13/01/2023");
    bank.withdraw(500, "14/01/2023");
    const lastOperation = bank.account[bank.account.length - 1];
    expect(lastOperation.balance).toEqual(2500);
  });

  test("it should print the statement correctly", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const bank = new Bank();
    bank.deposit(1000, "10/01/2023");
    bank.deposit(2000, "13/01/2023");
    bank.withdraw(500, "14/01/2023");
    bank.printStatement();
    expect(consoleSpy).toHaveBeenCalledWith("date || credit || debit || balance");
    expect(consoleSpy).toHaveBeenCalledWith("14/01/2023 || || 500.00 || 2500.00");
    expect(consoleSpy).toHaveBeenCalledWith("13/01/2023 || 2000.00 || || 3000.00");
    expect(consoleSpy).toHaveBeenCalledWith("10/01/2023 || 1000.00 || || 1000.00");
  });
});
