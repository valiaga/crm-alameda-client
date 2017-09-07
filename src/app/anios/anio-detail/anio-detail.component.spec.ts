import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnioDetailComponent } from './anio-detail.component';

describe('AnioDetailComponent', () => {
  let component: AnioDetailComponent;
  let fixture: ComponentFixture<AnioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
