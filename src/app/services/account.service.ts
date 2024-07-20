import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccountBalanceResponse, IBeneficiariesDTO, ITransactionsResponse } from '../models/api-types';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = `${environment.host}za/pb/v1/accounts`;
  dateRangeQueryParam = 'fromDate=2022-11-01&toDate=2023-02-10';

  constructor(private http: HttpClient) {}

  getTransactions(accountId: string): Observable<ITransactionsResponse> {
    return this.http.get(
      `${this.baseUrl}/${accountId}/transactions?${this.dateRangeQueryParam}`,
      { headers: { host: environment.host } }
    ) as Observable<ITransactionsResponse>;
  }

  createBeneficiary(beneficiary: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/beneficiaries`, {
      beneficiaryId: beneficiary.beneficiaryId,
      accountNumber: beneficiary.accountNumber,
      bank: beneficiary.bank,
      beneficiaryName: beneficiary.beneficiaryName,
    }) as Observable<any>;
  }

  getBeneficiary() : Observable<IBeneficiariesDTO> {
    return this.http.get(`${this.baseUrl}/beneficiaries`) as Observable<IBeneficiariesDTO>;
  }
}
