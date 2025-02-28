import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaneUiComponent } from './guane-ui.component';

describe('GuaneUiComponent', () => {
  let component: GuaneUiComponent;
  let fixture: ComponentFixture<GuaneUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuaneUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuaneUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
