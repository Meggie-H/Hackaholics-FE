import {Component} from '@angular/core';
import {NgIconComponent, provideIcons} from '@ng-icons/core';
import {matArrowBackRound, matArrowForwardIosRound, matMoreVertRound} from "@ng-icons/material-icons/round";
import {matAccountBalanceWalletOutline} from "@ng-icons/material-icons/outline";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ matArrowBackRound, matMoreVertRound, matArrowForwardIosRound, matAccountBalanceWalletOutline })],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
