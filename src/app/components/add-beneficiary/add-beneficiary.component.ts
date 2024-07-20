import { Component, OnDestroy, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-add-beneficiary',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-beneficiary.component.html',
  styleUrl: './add-beneficiary.component.css',
})
export class AddBeneficiaryComponent implements OnDestroy {
  apiService = inject(AccountService);
  benSub = new Subscription();

  beneficiaryFrom = new FormGroup({
    beneficiaryId: new FormControl('', Validators.required),
    accountNumber: new FormControl('', Validators.required),
    bank: new FormControl('', Validators.required),
    beneficiaryName: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.benSub = this.apiService
      .createBeneficiary(this.beneficiaryFrom.value)
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.benSub.unsubscribe();
  }
}
