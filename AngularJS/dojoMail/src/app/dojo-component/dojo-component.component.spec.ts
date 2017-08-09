import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DojoComponentComponent } from './dojo-component.component';

describe('DojoComponentComponent', () => {
  let component: DojoComponentComponent;
  let fixture: ComponentFixture<DojoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DojoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DojoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
