import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Lista de Usuarios';
  }

}
