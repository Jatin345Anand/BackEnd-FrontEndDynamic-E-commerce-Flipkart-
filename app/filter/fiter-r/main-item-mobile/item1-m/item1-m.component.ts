import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item1-m',
  templateUrl: './item1-m.component.html',
  styleUrls: ['./item1-m.component.css']
})
export class Item1MComponent implements OnInit {
  private mobilename:string;

  constructor() {
  this.mobilename="Asus Zenfone 4 (Blue, 8 GB)";
  }

  ngOnInit() {
  } 
}
