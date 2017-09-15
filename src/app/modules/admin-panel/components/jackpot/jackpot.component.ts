import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.css']
})
export class JackpotComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Admin Bote';
  }

}
