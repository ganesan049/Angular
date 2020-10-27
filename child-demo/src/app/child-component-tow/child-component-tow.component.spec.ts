import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentTowComponent } from './child-component-tow.component';

describe('ChildComponentTowComponent', () => {
  let component: ChildComponentTowComponent;
  let fixture: ComponentFixture<ChildComponentTowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponentTowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
