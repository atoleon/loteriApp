import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Admin Bote';
  }

}
