import { Routes } from '@angular/router';
import { AddBeneficiaryComponent } from './components/add-beneficiary/add-beneficiary.component';
import { TransactionPageComponent } from './components/transaction-page/transaction-page.component';

export const routes: Routes = [
  { path: 'transactions', component: TransactionPageComponent },
  { path: 'add-beneficiary', component: AddBeneficiaryComponent },
];
