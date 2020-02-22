import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoordsComponent } from './list-coords.component';

describe('ListCoordsComponent', () => {
  let component: ListCoordsComponent;
  let fixture: ComponentFixture<ListCoordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
