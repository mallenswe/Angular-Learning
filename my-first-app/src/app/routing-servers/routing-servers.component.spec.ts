import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingServersComponent } from './routing-servers.component';

describe('RoutingServersComponent', () => {
  let component: RoutingServersComponent;
  let fixture: ComponentFixture<RoutingServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
