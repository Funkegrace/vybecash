import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialNeedsComponent } from './financial-needs.component';

describe('FinancialNeedsComponent', () => {
  let component: FinancialNeedsComponent;
  let fixture: ComponentFixture<FinancialNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialNeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
