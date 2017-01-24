/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JokeDataService } from './joke-data.service';

describe('JokeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokeDataService]
    });
  });

  it('should ...', inject([JokeDataService], (service: JokeDataService) => {
    expect(service).toBeTruthy();
  }));
});
