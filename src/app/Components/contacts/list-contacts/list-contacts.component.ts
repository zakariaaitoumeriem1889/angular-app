import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from '../../../Models/contact';
import {ContactService} from '../../../Services/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
  contacts: Observable<Contact[]>;

  constructor(
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.contacts = this.contactService.findAll();
  }

  delete(id: number) {
    this.contactService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }

  details(id: number): void {
    this.router.navigate(['showContacts', id]);
  }

  create(): void {
    this.router.navigate(['newContact']);
  }

  update(id: number): void {
    this.router.navigate(['editContact', id]);
  }
}
