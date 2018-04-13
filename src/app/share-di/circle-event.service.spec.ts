import { TestBed, inject } from '@angular/core/testing';

import { CircleEventService } from './circle-event.service';

describe('CircleEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CircleEventService]
    });
  });

  it('should be created', inject([CircleEventService], (service: CircleEventService) => {
    expect(service).toBeTruthy();
  }));
});
