import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-contact-selection',
  templateUrl: './contact-selection.page.html',
  styleUrls: ['./contact-selection.page.scss'],
})

export class ContactSelectionPage {
}
