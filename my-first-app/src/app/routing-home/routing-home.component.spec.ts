import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingHomeComponent } from './routing-home.component';

describe('RoutingHomeComponent', () => {
  let component: RoutingHomeComponent;
  let fixture: ComponentFixture<RoutingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
