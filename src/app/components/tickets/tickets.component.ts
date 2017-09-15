import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  title: string;
  description: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Componente de apuestas';
    this.description = 'Componete para gestionar las apuestas realizadas';
  }

}
