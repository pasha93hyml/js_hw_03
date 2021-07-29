const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const newTransaction = {
      id: this.transactions.length + 1,
      amount,
      type,
    };
    return newTransaction;
  },

  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    this.balance += amount;
  },

  withdraw(amount) {
    if (amount < this.balance) {
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW)
      );
      this.balance -= amount;
    } else {
      console.log(`Недостаточно средств, ваш баланс: ${this.balance}`);
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  getTransactionTotal(type) {
    let result = 0;
    for (let transaction of this.transactions) {
      if (Object.values(transaction).includes(type)) {
        result += transaction.amount;
      }
    }
    return result;
  },
};
