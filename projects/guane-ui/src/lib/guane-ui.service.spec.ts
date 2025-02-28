import { TestBed } from '@angular/core/testing';

import { GuaneUiService } from './guane-ui.service';

describe('GuaneUiService', () => {
  let service: GuaneUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuaneUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
