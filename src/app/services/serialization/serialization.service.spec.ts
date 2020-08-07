import { TestBed } from '@angular/core/testing';
import { MimeType } from 'src/app/utils/mime-type';
import { Proof } from '../data/proof/proof';
import { SerializationService } from './serialization.service';

describe('SerializationService', () => {
  let service: SerializationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerializationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test stringify$', () => {
    const newMimeType: MimeType = {
      type: 'picture',
      extension: 'jpeg'
    };

    const newProof: Proof = {
      hash: '127e6fbfe24a750e72930c220a8e138275656b8e5d8f48a98c3c92df2caba935',
      mimeType: newMimeType,
      timestamp: 20201208
    };
    const expectedOutput = '{"proof":{"hash":"127e6fbfe24a750e72930c220a8e138275656b8e5d8f48a98c3c92df2caba935","mimeType":{"type":"picture","extension":"jpeg"},"timestamp":20201208},"sortedInformation":[]}';

    service.stringify$(newProof).subscribe(x => {
      expect(x).toEqual(expectedOutput);
    });
  });
});
