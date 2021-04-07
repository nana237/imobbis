import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hightech',
  templateUrl: './hightech.page.html',
  styleUrls: ['./hightech.page.scss'],
})
export class HightechPage implements OnInit {

  constructor() { }

  public isSearchbarOpened : boolean = false;

  ngOnInit() {
  }

}
