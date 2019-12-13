import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficacontaminacionComponent } from './graficacontaminacion.component';

describe('GraficacontaminacionComponent', () => {
  let component: GraficacontaminacionComponent;
  let fixture: ComponentFixture<GraficacontaminacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficacontaminacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficacontaminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
