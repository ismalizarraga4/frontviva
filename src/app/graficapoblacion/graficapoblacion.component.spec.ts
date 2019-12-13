import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficapoblacionComponent } from './graficapoblacion.component';

describe('GraficapoblacionComponent', () => {
  let component: GraficapoblacionComponent;
  let fixture: ComponentFixture<GraficapoblacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficapoblacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficapoblacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
