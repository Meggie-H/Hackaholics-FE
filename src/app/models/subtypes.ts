export interface AccountsData {
    accounts: Account[]
  }
  export interface Account {
    accountId: string
    accountNumber: string
    accountName: string
    referenceName: string
    productName: string
  }
  export interface Links {
    self: string
  }
  export interface Meta {
    totalPages: number
  }

  export interface BalanceData {
    accountId: string
    currentBalance: number
    availableBalance: number
    currency: string
  }

  export interface TransactionData {
    transactions: Transaction[]
  }
  export interface Transaction {
    accountId: string
    type: string
    transactionType: string
    status: string
    description: string
    cardNumber: string
    postedOrder: string
    postingDate: string
    valueDate: string
    actionDate: string
    transactionDate: string
    amount: string
    runningBalance: string
  }