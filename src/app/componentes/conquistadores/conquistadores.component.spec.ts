import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConquistadoresComponent } from './conquistadores.component';

describe('ConquistadoresComponent', () => {
  let component: ConquistadoresComponent;
  let fixture: ComponentFixture<ConquistadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConquistadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConquistadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
