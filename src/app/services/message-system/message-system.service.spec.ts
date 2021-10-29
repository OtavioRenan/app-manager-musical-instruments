import { TestBed } from '@angular/core/testing';

import { MessageSystemService } from './message-system.service';

describe('MessageSystemService', () => {
  let service: MessageSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
