import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { ListContactsComponent } from './Components/contacts/list-contacts/list-contacts.component';
import { AddContactComponent } from './Components/contacts/add-contact/add-contact.component';
import { ShowContactComponent } from './Components/contacts/show-contact/show-contact.component';
import { EditContactComponent } from './Components/contacts/edit-contact/edit-contact.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AboutService} from './Services/about.service';
import {ContactService} from './Services/contact.service';
import { GalleryComponent } from './Components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ListContactsComponent,
    AddContactComponent,
    ShowContactComponent,
    EditContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AboutService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
