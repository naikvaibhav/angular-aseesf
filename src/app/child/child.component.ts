import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
@Input() msg : String;

@Output() notify : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  childFuction(){
    this.notify.emit('Hello parent')
  }

  closeFunction(){
    this.notify.emit(' ')
  }

}