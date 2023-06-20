const Statement = require("../src/statement");

describe("Statement", () => {
  test("it should print the statement correctly", () => {
    const mockAccount = {
      transactions: [
        {
          amount: 1000,
          date: "10/01/2023",
          type: "deposit",
          balance: 1000,
        },
        {
          amount: 2000,
          date: "13/01/2023",
          type: "deposit",
          balance: 3000,
        },
        {
          amount: 500,
          date: "14/01/2023",
          type: "withdrawal",
          balance: 2500,
        },
      ],
    };
    const consoleSpy = jest.spyOn(console, "log");
    const statement = new Statement();
    statement.print(mockAccount.transactions);
    expect(consoleSpy).toHaveBeenCalledWith("date || credit || debit || balance");
    expect(consoleSpy).toHaveBeenCalledWith("14/01/2023 || || 500.00 || 2500.00");
    expect(consoleSpy).toHaveBeenCalledWith("13/01/2023 || 2000.00 || || 3000.00");
    expect(consoleSpy).toHaveBeenCalledWith("10/01/2023 || 1000.00 || || 1000.00");
  });
});
