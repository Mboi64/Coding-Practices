class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: "deposit", amount: amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }
    return `Deposit amount must be greater than zero.`;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: "withdraw", amount: amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }

    return `Insufficient balance or invalid amount.`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const list = this.transactions.filter(
      (deposit) => deposit.type === "deposit",
    );
    const depositAmount = list.map((amount) => amount.amount);
    return `Deposits: ${depositAmount.join(",")}`;
  }

  listAllWithdrawals() {
    const list = this.transactions.filter(
      (deposit) => deposit.type === "withdraw",
    );
    const withdrawAmount = list.map((amount) => amount.amount);
    return `Withdrawals: ${withdrawAmount.join(",")}`;
  }
}

const myAccount = new BankAccount();

myAccount.deposit(10);
myAccount.deposit(35);
myAccount.withdraw(11);
myAccount.withdraw(5);
myAccount.deposit(90);
