import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadFormComponent } from './unidad-form.component';

describe('UnidadFormComponent', () => {
  let component: UnidadFormComponent;
  let fixture: ComponentFixture<UnidadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
