import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubEventComponent } from './club-event.component';

describe('ClubEventComponent', () => {
  let component: ClubEventComponent;
  let fixture: ComponentFixture<ClubEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
