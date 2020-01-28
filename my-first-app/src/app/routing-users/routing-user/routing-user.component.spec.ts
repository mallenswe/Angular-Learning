import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingUserComponent } from './routing-user.component';

describe('RoutingUserComponent', () => {
  let component: RoutingUserComponent;
  let fixture: ComponentFixture<RoutingUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
