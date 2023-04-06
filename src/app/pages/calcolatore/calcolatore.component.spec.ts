import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcolatoreComponent } from './calcolatore.component';

describe('CalcolatoreComponent', () => {
  let component: CalcolatoreComponent;
  let fixture: ComponentFixture<CalcolatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcolatoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcolatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
