import { ComponentFixture, TestBed } from '@angular/core/testing';

import { jogosRegistroComponent } from './jogos-registro.component';

describe('jogosRegistroComponent', () => {
  let component: jogosRegistroComponent;
  let fixture: ComponentFixture<jogosRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ jogosRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(jogosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
