import { Component, OnInit } from '@angular/core';
import {Contact} from '../../../Models/contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../../../Services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  id: number;
  contact: Contact;
  submitted: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contact = new Contact();
    this.id = this.route.snapshot.params.id;
    this.submitted = false;
    this.contactService.find(this.id)
      .subscribe(data => {
        console.log(data);
        this.contact = data;
      }, error => console.log(error));
  }

  update(): void {
    this.contactService.edit(this.id, this.contact)
      .subscribe(
        data => console.log(data),
          error => console.log(error)
      );
    this.contact = new Contact();
    this.gotoList();
  }

  onSubmit(): void {
    this.submitted = true;
    this.update();
  }

  gotoList(): void {
    this.router.navigate(['/contacts']);
  }
}
