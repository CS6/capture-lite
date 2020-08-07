import { TestBed } from '@angular/core/testing';
import { MimeType } from 'src/app/utils/mime-type';
import { Proof } from '../proof/proof';
import { Signature } from './signature';
import { SignatureRepository } from './signature-repository.service';

describe('SignatureRepository', () => {
  let service: SignatureRepository;
  let signature: Signature;
  let proof: Proof;
  let mimeType: MimeType;

  beforeEach(() => {

    signature = {
      proofHash: 'e0d123e5f316bef78bfdf5a008837577',
      provider: 'exampleProvider',
      signature: 'exampleSignature',
      publicKey: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCqGKukO1De7zhZj6+H0qtjTkVxwTCpvKe4eCZ0FPqri0cb2JZfXJ/DgYSF6vUpwmJG8wVQZKjeGcjDOL5UlsuusFncCzWBQ7RKNUSesmQRMSGkVb1/3j+skZ6UtW+5u09lHNsj6tQ51s1SPrCBkedbNf0Tp0GbMJDyR4e9T04ZZwIDAQAB'
    };

    TestBed.configureTestingModule({});
    service = TestBed.inject(SignatureRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test add$', (done: DoneFn) => {
    service.add$(signature).subscribe(x => {
      expect(x[x.length - 1]).toEqual(signature);
      done();
    });
  });

  describe('test refresh$', () => {
    it('should refresh', (done: DoneFn) => {
      service.refresh$().subscribe(x => {
        expect(x[x.length - 1]).toEqual(signature);
        done();
      });
    });
  });

  describe('SignatureRepository getByProof', () => {
    beforeEach(() => {
      mimeType = {
        type: 'picture',
        extension: 'jpeg'
      };

      proof = {
        hash: 'e0d123e5f316bef78bfdf5a008837577',
        mimeType,
        timestamp: 20200812
      };
    });
    it('test getByProof', (done: DoneFn) => {
      service.getByProof$(proof).subscribe(x => {
        expect(x).toEqual([]);
        done();
      });
    });
  });
});
