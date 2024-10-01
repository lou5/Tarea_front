import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTareaComponent } from './registro-tarea.component';

describe('RegistroTareaComponent', () => {
  let component: RegistroTareaComponent;
  let fixture: ComponentFixture<RegistroTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroTareaComponent]
    });
    fixture = TestBed.createComponent(RegistroTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
