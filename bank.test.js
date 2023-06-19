const Bank = require("./bank");

describe("Bank", () => {
  test("initially the account should be empty", () => {
    const bank = new Bank();
    expect(bank.account).toEqual([]);
  });

  test("making a deposit of 1000 it should add the amount to the account", () => {
    const bank = new Bank();
    bank.deposit(1000, "10-01-2023");
    expect(bank.account).toEqual([{ amount: 1000, date: "10-01-2023", type: "deposit" }]);
  });
});
