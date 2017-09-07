import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnioFormComponent } from './anio-form.component';

describe('AnioFormComponent', () => {
  let component: AnioFormComponent;
  let fixture: ComponentFixture<AnioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
