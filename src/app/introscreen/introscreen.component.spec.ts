import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroscreenComponent } from './introscreen.component';

describe('IntroscreenComponent', () => {
  let component: IntroscreenComponent;
  let fixture: ComponentFixture<IntroscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
