import { TestBed } from '@angular/core/testing';
import { MimeType } from 'src/app/utils/mime-type';
import { Proof } from '../proof/proof';
import { Caption } from './caption';
import { CaptionRepository } from './caption-repository.service';

describe('CaptionRepository', () => {
  let service: CaptionRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaptionRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test addOrEdit$', () => {
    let caption: Caption;

    beforeEach(() => {
      caption = {
        proofHash: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
        text: 'test'
      };
    });

    it('should add', (done: DoneFn) => {
      service.addOrEdit$(caption).subscribe(x => {
        console.log('add', x);
        expect(x[x.length - 1]).toEqual(caption);
        done();
      });
    });

    describe('test getByProof', () => {
      let proof: Proof;
      let mimeType: MimeType;

      beforeEach(() => {
        mimeType = {
          type: 'picture',
          extension: 'jpeg'
        };
        proof = {
          hash: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
          mimeType,
          timestamp: Date.now()
        };
      });

      it('should get by proof', (done: DoneFn) => {
        service.getByProof$(proof).subscribe(x => {
          console.log('get by proof', x);
          expect(x).toEqual([]);
          done();
        });
      });
    });
  });
});
