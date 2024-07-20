import { Routes } from '@angular/router';
import { TransactionPageComponent } from './components/transaction-page/transaction-page.component';
import { BeneficiariesPageComponent } from './components/beneficiaries-page/beneficiaries-page.component';

export const routes: Routes = [{path: 'transactions', component: TransactionPageComponent}, {path: 'beneficiaries', component: BeneficiariesPageComponent}];
