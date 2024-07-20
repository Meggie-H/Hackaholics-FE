import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = `${environment.host}/za/pb/v1/accounts/`

  constructor(private http: HttpClient) {
    
   }
}
