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

  export interface IBeneficiariesDTO {
    data: Data
    links: Links
    meta: Meta
  }
  export interface Data {
    result: IBeneficiary[]
  }
  export interface IBeneficiary {
    beneficiaryId: string
    accountNumber: string
    code: string
    bank: string
    beneficiaryName: string
    lastPaymentAmount: string
    lastPaymentDate: string
    cellNo: string | null
    emailAddress: string | null
    name: string
    referenceAccountNumber: string
    referenceName: string
    categoryId: string
    profileId: string
    isFlagged?: boolean 
  }



