import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesListComponent } from './componentes-list.component';

describe('ComponentesListComponent', () => {
  let component: ComponentesComponent;
  let fixture: ComponentFixture<ComponentesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
