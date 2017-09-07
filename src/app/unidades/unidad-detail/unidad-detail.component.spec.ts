import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadDetailComponent } from './unidad-detail.component';

describe('UnidadDetailComponent', () => {
  let component: UnidadDetailComponent;
  let fixture: ComponentFixture<UnidadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
