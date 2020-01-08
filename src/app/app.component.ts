import { Post } from './interface/post';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'doggy-training-component-lesson';
  list: Post[] = [];
  constructor(
    private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get('http://localhost:3000/posts').subscribe(
      (val: Post[]) => {
        this.list = val;
      }
    );
  }
}
