import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountStatusComponent } from './account-status.component';

describe('AccountStatusComponent', () => {
  let component: AcountStatusComponent;
  let fixture: ComponentFixture<AcountStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcountStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcountStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
