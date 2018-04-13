import { TestBed, inject } from '@angular/core/testing';

import { ClubEventService } from './club-event.service';

describe('ClubEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubEventService]
    });
  });

  it('should be created', inject([ClubEventService], (service: ClubEventService) => {
    expect(service).toBeTruthy();
  }));
});
