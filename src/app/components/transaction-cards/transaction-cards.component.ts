import { Component, Input } from '@angular/core';
import { ITransactionCardInfo } from '../../models/app-types';
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {matQueryBuilder} from '@ng-icons/material-icons/baseline'

@Component({
  selector: 'app-transaction-cards',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ matQueryBuilder })],
  templateUrl: './transaction-cards.component.html',
  styleUrl: './transaction-cards.component.css'
})
export class TransactionCardsComponent {
  @Input() transactionCard: ITransactionCardInfo = {amount: 0, transsactionDate: '', description: '', transactionType: ''};
}
