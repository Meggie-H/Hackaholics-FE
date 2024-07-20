import { Routes } from '@angular/router';
import { AddBeneficiaryComponent } from './components/add-beneficiary/add-beneficiary.component';
import { TransactionPageComponent } from './components/transaction-page/transaction-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: 'transactions',
    component: TransactionPageComponent,
    title: 'Transactions | Investec',
  },
  {
    path: '',
    component: LandingPageComponent,
    title: 'Payments | Investec',
  },
  { path: 'add-beneficiary', component: AddBeneficiaryComponent },
];
