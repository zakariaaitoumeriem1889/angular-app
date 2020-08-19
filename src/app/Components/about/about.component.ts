import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../Services/about.service';
import {Info} from "../../Models/info";
import {Comment} from "../../Models/comment";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info: Info;
  comment: Comment;
  comments: Comment[];
  newComment: boolean;

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.info = this.aboutService.getInfo();
    this.comments = this.aboutService.getAllComments();
    this.comment = {
      id: 0,
      message: '',
      date: null
    };
    this.newComment = false;
  }

  addComment(): void {
    if (this.comment.message != '') {
      this.aboutService.addComment({
        message: this.comment.message
      });
      this.comments = this.aboutService.getAllComments();
      this.comment.message = '';
    }
  }
}
