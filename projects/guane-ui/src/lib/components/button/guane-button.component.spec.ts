import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaneButtonComponent } from './guane-button.component';

describe('ButtonComponent', () => {
  let component: GuaneButtonComponent;
  let fixture: ComponentFixture<GuaneButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuaneButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuaneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
