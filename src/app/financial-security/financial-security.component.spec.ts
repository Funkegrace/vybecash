import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialSecurityComponent } from './financial-security.component';

describe('FinancialSecurityComponent', () => {
  let component: FinancialSecurityComponent;
  let fixture: ComponentFixture<FinancialSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
