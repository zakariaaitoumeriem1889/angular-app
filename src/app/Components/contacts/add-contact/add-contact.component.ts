import { Component, OnInit } from '@angular/core';
import {Contact} from '../../../Models/contact';
import {ContactService} from '../../../Services/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact: Contact;
  submitted: boolean;

  constructor(
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.submitted = false;
    this.contact = new Contact();
  }

  newContact(): void {
    this.submitted = false;
    this.contact = new Contact();
  }

  save(): void {
    this.contactService.create(this.contact)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.contact = new Contact();
    this.gotoList();
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['/contacts']);

  }
}
