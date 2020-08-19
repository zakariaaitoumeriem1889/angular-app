import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './Components/about/about.component';
import {ListContactsComponent} from './Components/contacts/list-contacts/list-contacts.component';
import {ShowContactComponent} from './Components/contacts/show-contact/show-contact.component';
import {AddContactComponent} from './Components/contacts/add-contact/add-contact.component';
import {EditContactComponent} from './Components/contacts/edit-contact/edit-contact.component';
import {GalleryComponent} from './Components/gallery/gallery.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ListContactsComponent },
  { path: 'showContacts/:id', component: ShowContactComponent },
  { path: 'newContact', component: AddContactComponent },
  { path: 'editContact/:id', component: EditContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
