import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultscreen',
  templateUrl: './resultscreen.component.html',
  styleUrls: ['./resultscreen.component.css']
})
export class ResultscreenComponent implements OnInit {
	score = localStorage.getItem('score');
  constructor() { }

  ngOnInit(): void {
  }

}
