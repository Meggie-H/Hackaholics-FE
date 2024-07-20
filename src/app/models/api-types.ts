import { Meta, TransactionData } from "./subtypes"
import { AccountsData, BalanceData, Links } from "./subtypes"

export interface IAccountsResponse {
    data: AccountsData
    links: Links
    meta: Meta
  }

  export interface IAccountBalanceResponse {
    data: BalanceData
    links: Links
    meta: Meta
  }
  export interface ITransactionsResponse {
    data: TransactionData
    links: Links
    meta: Meta
  }



