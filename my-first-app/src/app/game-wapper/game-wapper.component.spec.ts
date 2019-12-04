import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWapperComponent } from './game-wapper.component';

describe('GameWapperComponent', () => {
  let component: GameWapperComponent;
  let fixture: ComponentFixture<GameWapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameWapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
