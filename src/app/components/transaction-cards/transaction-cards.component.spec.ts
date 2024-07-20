import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCardsComponent } from './transaction-cards.component';

describe('TransactionCardsComponent', () => {
  let component: TransactionCardsComponent;
  let fixture: ComponentFixture<TransactionCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
