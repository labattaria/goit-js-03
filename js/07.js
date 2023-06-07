/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const { DEPOSIT, WITHDRAW } = Transaction;

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,


  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = {}

    let lastId = this.transactions[this.transactions.length - 1]?.id || 0;
    transaction.id = ++lastId;
    transaction.type = type;
    transaction.amount = amount;

    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    // this.createTransaction(amount, DEPOSIT);
    this.transactions.push(this.createTransaction(amount, DEPOSIT));
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    // this.createTransaction(amount, WITHDRAW);

    if (amount > this.balance) {
      console.log('Cнятие такой суммы не возможно, недостаточно средств');
      return;
    }

    this.transactions.push(this.createTransaction(amount, WITHDRAW));
    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    const { transactions } = this;

    for (const transaction of transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalAmountOfTransactionType = 0;
    const { transactions } = this;

    for (const transaction of transactions) {
      if (transaction.type === type) {
        totalAmountOfTransactionType += transaction.amount;
      }
    }
    return totalAmountOfTransactionType;
  },
};

account.deposit(500);
account.withdraw(300);
console.log(account.getBalance());
account.deposit(200);
account.deposit(1000);
console.log(account.getBalance());
account.withdraw(200);
account.withdraw(150);
console.log(account.getTransactionDetails(4));
console.log(account.getBalance());
console.log(account.getTransactionTotal(DEPOSIT));
console.log(account.getTransactionTotal(WITHDRAW));