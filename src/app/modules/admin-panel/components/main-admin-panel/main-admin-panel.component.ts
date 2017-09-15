import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-admin-panel',
  templateUrl: './main-admin-panel.component.html',
  styleUrls: ['./main-admin-panel.component.css']
})
export class MainAdminPanelComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Admin Panel';
  }

}
