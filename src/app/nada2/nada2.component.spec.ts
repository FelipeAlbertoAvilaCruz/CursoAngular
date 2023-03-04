import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nada2Component } from './nada2.component';

describe('Nada2Component', () => {
  let component: Nada2Component;
  let fixture: ComponentFixture<Nada2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nada2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nada2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
