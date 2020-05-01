import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  names = [
    "Ana",
    "John",
    "Mark",
    "Mariel"
  ];

  cities = [
    { name: "São Paulo", state: "SP" },
    { name: "Brasília", state: "DF" },
    { name: "Rio de Janeiro", state: "RJ" },
    { name: "Nova York", state: "NYC" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
