import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AccountService } from '../../services/account.service';
import { AsyncPipe } from '@angular/common';
import { IBeneficiaryCardInfo } from '../../models/app-types';
import { BeneficiariesCardComponent } from "../beneficiaries-card/beneficiaries-card.component";

@Component({
  selector: 'app-beneficiaries-page',
  standalone: true,
  imports: [AsyncPipe, BeneficiariesCardComponent],
  templateUrl: './beneficiaries-page.component.html',
  styleUrl: './beneficiaries-page.component.css'
})
export class BeneficiariesPageComponent {
  beneficiaries$ = this.AccService.getBeneficiary();
  constructor(private AccService : AccountService) { 
    
  }
}
