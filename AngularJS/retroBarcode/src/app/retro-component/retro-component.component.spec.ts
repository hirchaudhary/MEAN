import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroComponentComponent } from './retro-component.component';

describe('RetroComponentComponent', () => {
  let component: RetroComponentComponent;
  let fixture: ComponentFixture<RetroComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
