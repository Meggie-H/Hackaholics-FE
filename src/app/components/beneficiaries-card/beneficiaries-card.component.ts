import { Component, Input } from '@angular/core';
import { IBeneficiaryCardInfo } from '../../models/app-types';
import { IBeneficiary } from '../../models/api-types';
import { mockBeneficiary } from '../../utilities/mocks';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {iconoirWarningTriangle} from '@ng-icons/iconoir'

@Component({
  selector: 'app-beneficiaries-card',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({iconoirWarningTriangle })],
  templateUrl: './beneficiaries-card.component.html',
  styleUrl: './beneficiaries-card.component.css'
})
export class BeneficiariesCardComponent {
  @Input() beneficiaryInfo: IBeneficiary = mockBeneficiary

}
