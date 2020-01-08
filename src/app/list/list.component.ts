import { Post } from './../interface/post';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: Post[] = [];
  @Output() updateList = new EventEmitter();
  disable = false;

  constructor() { }

  ngOnInit() {
  }

}
