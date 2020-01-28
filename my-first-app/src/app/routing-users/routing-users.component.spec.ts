import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingUsersComponent } from './routing-users.component';

describe('RoutingUsersComponent', () => {
  let component: RoutingUsersComponent;
  let fixture: ComponentFixture<RoutingUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
