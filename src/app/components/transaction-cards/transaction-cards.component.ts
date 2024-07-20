import { Component, Input } from '@angular/core';
import { ITransactionCardInfo } from '../../models/app-types';

@Component({
  selector: 'app-transaction-cards',
  standalone: true,
  imports: [],
  templateUrl: './transaction-cards.component.html',
  styleUrl: './transaction-cards.component.css'
})
export class TransactionCardsComponent {
  @Input() transactionCard: ITransactionCardInfo = {amount: 0, transsactionDate: '', description: '', transactionType: ''};
}
