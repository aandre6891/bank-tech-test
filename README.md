# Bank Class

The `Bank` class represents a simple banking system that allows users to deposit and withdraw money, and generate a statement of the account.

## Usage example inputs for Node

```javascript
const Bank = require('./bank');

const bank = new Bank();

bank.deposit(1000, '10/01/2023');
bank.deposit(2000, '13/01/2023');
bank.withdraw(500, '14/01/2023');

bank.printStatement();
```

## Methods

### constructor()

The constructor initializes a new instance of the `Bank` class with an empty account array.

### deposit(value, date)

The `deposit()` method allows the user to deposit a specified amount of money into the account. It takes two parameters:

- `value` (number): The amount of money to deposit.
- `date` (string): The date of the deposit.

### withdraw(value, date)

The `withdraw()` method allows the user to withdraw a specified amount of money from the account. It takes two parameters:

- `value` (number): The amount of money to withdraw.
- `date` (string): The date of the withdrawal.

### calculateBalance(value, type)

The `calculateBalance()` method calculates the balance of the account based on the previous balance and the type of transaction (deposit or withdrawal). It takes two parameters:

- `value` (number): The amount of the transaction.
- `type` (string): The type of the transaction, either "deposit" or "withdrawal".

### printStatement()

The `printStatement()` method prints a statement of account, displaying the date, credit (deposit), debit (withdrawal), and balance after each transaction in the account.

## Example Output

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

The statement is displayed in the format: "date || credit || debit || balance", with each transaction represented as a row showing the corresponding details.

## Setup

To use the `Bank` class, follow these steps:

1. Setup your environment to use node latest version: `nvm use node`.
2. Create an empty project directory.
3. Initialise the NPM project (this will create a file package.json): `npm init -y`.
3. Run node in your terminal:  `node`.
4. Require the class Bank from the file bank.js: `const Bank = require('./bank');`.
4. Create an instance of the `Bank` class using the `new` keyword: `const bank = new Bank();`.
5. Use the available methods (`deposit`, `withdraw`, `printStatement`) to interact with the bank and generate statements. (use the example inputs at the    beginning of this file as a reference)

## Testing

To test the `Bank` class, you can use Jest, a popular JavaScript testing framework. Follow these steps to set up and run the tests:

1. Add the jest package to test the project: `npm add jest`.
2. Install jest "globally": `npm install -g jest`
3. Run the tests: `jest`
