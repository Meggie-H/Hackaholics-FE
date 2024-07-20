import { Component, Input } from '@angular/core';
import { IBeneficiaryCardInfo } from '../../models/app-types';
import { IBeneficiary } from '../../models/api-types';
import { mockBeneficiary } from '../../utilities/mocks';

@Component({
  selector: 'app-beneficiaries-card',
  standalone: true,
  imports: [],
  templateUrl: './beneficiaries-card.component.html',
  styleUrl: './beneficiaries-card.component.css'
})
export class BeneficiariesCardComponent {
  @Input() beneficiaryInfo: IBeneficiary = mockBeneficiary

}
