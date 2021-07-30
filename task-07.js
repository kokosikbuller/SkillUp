const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw'
};

const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
      return {
          id: this.transactions.length + 1,
          amount,
          type
      }
  },
  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    this.balance += amount;
  },
  withdraw(amount) {
      if(amount > this.balance) {
          return alert('Снятие такой суммы не возможно, недостаточно средств')
      }
      this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
      this.balance -= amount;
  },
  getBalance() {
      return this.balance;
  },
  getTransactionDetails(id) {
      for(item of this.transactions) {
        if(item.id === id) {
            return item;
        }
      }
  },
  getTransactionTotal(type) {
    let total = 0;
    for(item of this.transactions) {
        if(item.type === type) {
            total += item.amount;
        }
    }
    return total;
  },
};
