import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSelectEnjoyComponent } from './create-select-enjoy.component';

describe('CreateSelectEnjoyComponent', () => {
  let component: CreateSelectEnjoyComponent;
  let fixture: ComponentFixture<CreateSelectEnjoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSelectEnjoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSelectEnjoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
