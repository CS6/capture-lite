import { TestBed } from '@angular/core/testing';
import { MimeType } from 'src/app/utils/mime-type';
import { Proof } from '../proof/proof';
import { Information } from './information';
import { InformationRepository } from './information-repository.service';

describe('InformationRepository', () => {
  let service: InformationRepository;
  let information: Information;
  let proof: Proof;
  let mimeType: MimeType;

  beforeEach(() => {
    information = {
      proofHash: 'e0d123e5f316bef78bfdf5a008837577',
      provider: 'exampleProvider',
      name: 'exampleName',
      value: 'examampleValue'
    };

    mimeType = {
      type: 'picture',
      extension: 'jpeg'
    };

    proof = {
      hash: 'e0d123e5f316bef78bfdf5a008837577',
      mimeType,
      timestamp: 20200812
    };
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test add$', (done: DoneFn) => {
    service.add$(information).subscribe(x => {
      expect(x[x.length - 1]).toEqual(information);
      done();
    });
  });

  it('test refresh$', (done: DoneFn) => {
    service.add$(information);
    service.refresh$().subscribe(x => {
      expect(x[x.length - 1]).toEqual(information);
      done();
    });
  });
});
