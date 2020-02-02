import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableUserComponent } from './observable-user.component';

describe('ObservableUserComponent', () => {
  let component: ObservableUserComponent;
  let fixture: ComponentFixture<ObservableUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
