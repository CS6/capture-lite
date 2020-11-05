import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSelectionPage } from './contact-selection.page';

const routes: Routes = [{
  path: '',
  component: ContactSelectionPage
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactSelectionPageRoutingModule { }
