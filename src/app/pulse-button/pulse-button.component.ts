import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulse-button',
  templateUrl: './pulse-button.component.html',
  styleUrls: ['./pulse-button.component.css']
})




export class PulseButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    alert("hello world");
  }

}
