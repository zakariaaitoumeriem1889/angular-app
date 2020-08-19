import { Injectable } from '@angular/core';
import {Info} from '../Models/info';
import {Comment} from '../Models/comment';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  info: Info = {
    nom: 'Zakaria AITOUMERIEM',
    email: 'zakariaaitoumeriem1889@gmail.com',
    tel: '0610151467'
  };
  comments: Comment[] = [];

  constructor() { }

  getInfo(): Info {
    return this.info;
  }

  addComment(c): void {
    c.date = new Date();
    this.comments.push(c);
  }

  getAllComments(): Comment[] {
    return this.comments;
  }
}
