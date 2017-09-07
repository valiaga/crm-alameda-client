import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AniosListComponent } from './anios-list.component';

describe('AniosListComponent', () => {
  let component: AniosListComponent;
  let fixture: ComponentFixture<AniosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AniosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AniosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
