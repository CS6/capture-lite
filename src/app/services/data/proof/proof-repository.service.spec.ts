import { TestBed } from '@angular/core/testing';
import { MimeType } from 'src/app/utils/mime-type';
import { Proof } from './proof';
import { ProofRepository } from './proof-repository.service';

fdescribe('ProofRepository', () => {
  let service: ProofRepository;
  let mimeType: MimeType;
  let proof: Proof;
  let numTimesRun: number;

  beforeEach(() => {
    numTimesRun = 0;

    mimeType = {
      type: 'picture',
      extension: 'jpeg'
    };

    proof = {
      hash: 'da55696ca8b934ddeb4d81a58196446cb8f94998ba733697815d1b986088ff9f',
      mimeType,
      timestamp: 20200820
    };

    TestBed.configureTestingModule({});
    service = TestBed.inject(ProofRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test add$ & getByHash$ & refresh$', (done: DoneFn) => {
    service.add$(proof).subscribe(x => {
      expect(x[x.length - 1]).toEqual(proof);
      done();
    });

    service.getByHash$(proof.hash).subscribe(x => {
      expect(x?.hash).toEqual(proof.hash);
      expect(x?.mimeType).toEqual(proof.mimeType);
      expect(x?.timestamp).toEqual(proof.timestamp);
      done();
    });

    service.refresh$().subscribe(x => {
      expect(x[x.length - 1]).toEqual(proof);
      done();
    });
  });

  it('test saveRawFile$', (done: DoneFn) => {
    const expectedOutput = '/DATA/raw/da55696ca8b934ddeb4d81a58196446cb8f94998ba733697815d1b986088ff9f.jpeg';
    service.saveRawFile$('dGhpcyBpcyB0ZXN0Cg==', mimeType).subscribe(x => {
      expect(x).toEqual(expectedOutput);
      done();
    });
  });

  it('test getRawFile$', (done: DoneFn) => {
    service.getRawFile$(proof).subscribe(x => {
      expect(x).toEqual('dGhpcyBpcyB0ZXN0Cg==');
      done();
    });
  });
});
