import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogLoveComponent } from './dog-love.component';

describe('DogLoveComponent', () => {
  let component: DogLoveComponent;
  let fixture: ComponentFixture<DogLoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogLoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
