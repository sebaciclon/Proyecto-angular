import { Component, OnInit } from '@angular/core';
import { Cigarette } from './cigarette';

@Component({
  selector: 'app-cigarette-list',
  templateUrl: './cigarette-list.component.html',
  styleUrls: ['./cigarette-list.component.css']
})
export class CigaretteListComponent implements OnInit {

  cigarettes: Cigarette[] = [
    {
      "name": "Dolchester",
      "price": 800,
      "stock": 100,
      "image": "assets/img/dolchester1.jpg",
      "offer": true,
    },
    {
      "name": "Dolchester Deluxe",
      "price": 800,
      "stock": 20,
      "image": "assets/img/dolchester1.jpg",
      "offer": false,
    },
    {
      "name": "Pier",
      "price": 800,
      "stock": 50,
      "image": "assets/img/dolchester1.jpg",
      "offer": true,
    },
    {
      "name": "Pier Mentolado",
      "price": 800,
      "stock": 0,
      "image": "assets/img/dolchester1.jpg",
      "offer": false,
    },
    {
      "name": "Master",
      "price": 830,
      "stock": 25,
      "image": "assets/img/dolchester1.jpg",
      "offer": false,
    },
    {
      "name": "Red Point",
      "price": 880,
      "stock": 75,
      "image": "assets/img/dolchester1.jpg",
      "offer": true,
    },
    {
      "name": "Red Point Box",
      "price": 920,
      "stock": 0,
      "image": "assets/img/dolchester1.jpg",
      "offer": false,
    },
    {
      "name": "Liverpool",
      "price": 750,
      "stock": 25,
      "image": "assets/img/dolchester1.jpg",
      "offer": false,
    },
    {
      "name": "Liverpool Mentolado",
      "price": 750,
      "stock": 0,
      "image": "assets/img/dolchester1.jpg",
      "offer":false,
    },
    {
      "name": "Camel",
      "price": 1500,
      "stock": 200,
      "image": "assets/img/dolchester1.jpg",
      "offer": true,
    },
    {
      "name": "Marlboro",
      "price": 1500,
      "stock": 5,
      "image": "assets/img/dolchester1.jpg",
      "offer": false,
    },
    {
      "name": "Philips",
      "price": 1400,
      "stock": 0,
      "image": "assets/img/dolchester1.jpg",
      "offer": false,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
