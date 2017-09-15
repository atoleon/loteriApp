import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title: string;
  description: string;
  @Input() user1: string;
  @Input('user2') secondUser: string;

  constructor() {
  }

  ngOnInit() {
    this.title = 'Usuarios';
    this.description = 'Componente para gestionar los usuarios de la peña';
  }

  toUppercase() {
    this.title = this.title.toUpperCase();
  }

}
