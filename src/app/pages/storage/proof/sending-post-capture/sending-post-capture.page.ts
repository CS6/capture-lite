import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ProofRepository } from 'src/app/services/data/proof/proof-repository.service';
import { isNonNullable } from 'src/app/utils/rx-operators';

@Component({
  selector: 'app-sending-post-capture',
  templateUrl: './sending-post-capture.page.html',
  styleUrls: ['./sending-post-capture.page.scss'],
})
export class SendingPostCapturePage {

  readonly proof$ = this.route.paramMap.pipe(
    map(params => params.get('hash')),
    isNonNullable(),
    switchMap(hash => this.proofRepository.getByHash$(hash)),
    isNonNullable()
  );
  readonly base64Src$ = this.proof$.pipe(
    switchMap(proof => this.proofRepository.getRawFile$(proof)),
    map(rawBase64 => `data:image/png;base64,${rawBase64}`)
  );
  isPreview = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly proofRepository: ProofRepository
  ) { }
}
