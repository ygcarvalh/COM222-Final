import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarReviewComponent } from './criar-review.component';

describe('CriarReviewComponent', () => {
  let component: CriarReviewComponent;
  let fixture: ComponentFixture<CriarReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
