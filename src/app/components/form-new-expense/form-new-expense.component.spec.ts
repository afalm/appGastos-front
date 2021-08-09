import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewExpenseComponent } from './form-new-expense.component';

describe('FormNewExpenseComponent', () => {
  let component: FormNewExpenseComponent;
  let fixture: ComponentFixture<FormNewExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewExpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
