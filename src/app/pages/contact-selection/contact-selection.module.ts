import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IonicModule } from '@ionic/angular';
import { TranslocoModule } from '@ngneat/transloco';
import { ContactSelectionPageRoutingModule } from './contact-selection-routing.module';
import { ContactSelectionPage } from './contact-selection.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ContactSelectionPageRoutingModule,
    TranslocoModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [ContactSelectionPage]
})
export class ContactSelectionPageModule { }
