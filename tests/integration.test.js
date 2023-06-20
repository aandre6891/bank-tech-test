const Account = require("../src/account");

let account;

describe("Integration of classes", () => {
  beforeEach(() => {
    account = new Account();
  });

  it("should add a deposit transaction and show it correctly", () => {
    account.deposit(2000, "20/06/2023");
    const consoleSpy = jest.spyOn(console, "log");
    account.printStatement();

    expect(consoleSpy).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "20/06/2023 || 2000.00 || || 2000.00"
    );
  });

  it("should add a withdrawal transaction and show it correctly", () => {
    account.withdraw(3000, "12/06/2023");
    account.printStatement();

    const consoleSpy = jest.spyOn(console, "log");
    expect(consoleSpy).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "12/06/2023 || || 3000.00 || -3000.00"
    );
  });

  it("after multiple operations it should display the transactions correctly", () => {
    account.deposit(3000, "12/06/2023");
    account.withdraw(2582, "13/06/2023");
    account.deposit(400, "14/06/2023");
    account.deposit(100, "15/06/2023");
    account.deposit(1000, "16/06/2023");
    account.withdraw(1918, "17/06/2023");
    account.printStatement();

    const consoleSpy = jest.spyOn(console, "log");
    expect(consoleSpy).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "12/06/2023 || 3000.00 || || 3000.00"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "13/06/2023 || || 2582.00 || 418.00"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "14/06/2023 || 400.00 || || 818.00"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "15/06/2023 || 100.00 || || 918.00"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "16/06/2023 || 1000.00 || || 1918.00"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "17/06/2023 || || 1918.00 || 0.00"
    );
  });
});
