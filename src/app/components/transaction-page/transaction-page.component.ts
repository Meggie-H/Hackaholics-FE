import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transaction-page',
  standalone: true,
  imports: [],
  templateUrl: './transaction-page.component.html',
  styleUrl: './transaction-page.component.css'
})
export class TransactionPageComponent {
  $transactions = new Subscription();
  constructor(private AccService : AccountService) { 
    this.$transactions = this.AccService.getTransactions("4675778129910189600000003").subscribe((data) => {
      console.log(data);
    });
  }
}
