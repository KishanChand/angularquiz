import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionscreenComponent } from './questionscreen.component';

describe('QuestionscreenComponent', () => {
  let component: QuestionscreenComponent;
  let fixture: ComponentFixture<QuestionscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
