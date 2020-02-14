import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRecipePostComponent } from './http-recipe-post.component';

describe('HttpRecipePostComponent', () => {
  let component: HttpRecipePostComponent;
  let fixture: ComponentFixture<HttpRecipePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpRecipePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpRecipePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
