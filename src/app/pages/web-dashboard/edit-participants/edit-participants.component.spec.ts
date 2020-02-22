import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParticipantsComponent } from './edit-participants.component';

describe('EditParticipantsComponent', () => {
  let component: EditParticipantsComponent;
  let fixture: ComponentFixture<EditParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
