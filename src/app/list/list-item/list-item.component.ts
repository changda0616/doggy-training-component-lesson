import { Post } from './../../interface/post';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Output() updateData = new EventEmitter<Post>();
  get data() {
    return this.originalData;
  }

  @Input('data')
  set data(value: Post) {
    this.originalData = {...value};
  }

  originalData: Post;

  disable = true;
  constructor() { }
  ngOnInit() { }

  changeChecked() {
    this.disable = !this.disable;
  }

  clickUpdate() {
    if (!this.disable) {
      this.updateData.emit(this.originalData);
    }
  }
}
