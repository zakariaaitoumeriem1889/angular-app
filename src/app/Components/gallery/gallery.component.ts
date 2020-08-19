import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  motCle: string;
  // tslint:disable-next-line:ban-types
  images: Object;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  pages: Array<number> = [];
  mode: string;
  currentImage = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.motCle = '';
    this.pageSize = 5;
    this.currentImage = 1;
    this.mode = 'LIST';
  }

  getImages(): void {
    // tslint:disable-next-line:max-line-length
    this.http.get('https://pixabay.com/api/?key=2493910-4c26fc8652fe037aeb46b7381&q=' + this.motCle + '&per_page=' + this.pageSize + '&page=' + this.currentImage)
      .subscribe(data => {
        console.log(data);
        this.images = data;
        this.totalPages = this.images['totalHists'] / this.pageSize;
        if (this.images['totalHists'] % this.pageSize != 0) {
          this.totalPages += 1;
        }
        this.pages = new Array(this.totalPages);
      });
  }

  goToPage(i: number): void {
    this.currentImage = i;
    this.getImages();
  }

  detailImage(im): void {
    this.mode = 'DETAIL';
    this.currentImage = im;
  }

}
