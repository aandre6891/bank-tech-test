const Bank = require("./bank");

describe("Bank", () => {
  test("initially the account should be empty", () => {
    const bank = new Bank();
    expect(bank.account).toEqual([]);
  });
});
