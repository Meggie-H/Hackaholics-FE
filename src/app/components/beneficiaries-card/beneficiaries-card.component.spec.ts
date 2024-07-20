import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariesCardComponent } from './beneficiaries-card.component';

describe('BeneficiariesCardComponent', () => {
  let component: BeneficiariesCardComponent;
  let fixture: ComponentFixture<BeneficiariesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiariesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiariesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
