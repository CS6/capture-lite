import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { StoragePageRoutingModule } from './storage-routing.module';
import { StoragePage } from './storage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoragePageRoutingModule,
    TranslateModule
  ],
  declarations: [StoragePage]
})
export class StoragePageModule { }