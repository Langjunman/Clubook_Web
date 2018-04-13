import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleEventComponent } from './circle-event.component';

describe('CircleEventComponent', () => {
  let component: CircleEventComponent;
  let fixture: ComponentFixture<CircleEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
