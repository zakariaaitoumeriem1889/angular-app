import { Component, OnInit } from '@angular/core';
import {Contact} from '../../../Models/contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../../../Services/contact.service';

@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css']
})
export class ShowContactComponent implements OnInit {
  id: number;
  contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contact = new Contact();
    this.id = this.route.snapshot.params.id;
    this.contactService.find(this.id)
      .subscribe(
        data => {
          console.log(data);
          this.contact = data;
        }, error => console.log(error)
      );
  }

  list(): void {
    this.router.navigate(['contacts']);
  }

}
