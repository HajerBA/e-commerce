import { TestBed, inject } from '@angular/core/testing';

import { MatDialogDataService } from './mat-dialog-data.service';

describe('MatDialogDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatDialogDataService]
    });
  });

  it('should be created', inject([MatDialogDataService], (service: MatDialogDataService) => {
    expect(service).toBeTruthy();
  }));
});
