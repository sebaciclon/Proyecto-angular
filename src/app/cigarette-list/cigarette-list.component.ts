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
      "stock": 5,
      "image": "assets/img/dolchester1.jpg",
      "offer": true,
      "quantity": 0,
    },
    {
      "name": "Dolchester Deluxe",
      "price": 800,
      "stock": 20,
      "image": "assets/img/dolchester2.jpg",
      "offer": false,
      "quantity": 0,
    },
    {
      "name": "Pier",
      "price": 800,
      "stock": 50,
      "image": "assets/img/pier.jpg",
      "offer": true,
      "quantity": 0,
    },
    {
      "name": "Pier Mentolado",
      "price": 800,
      "stock": 10,
      "image": "assets/img/pier mentolado.jpg",
      "offer": false,
      "quantity": 0,
    },
    {
      "name": "Master",
      "price": 830,
      "stock": 25,
      "image": "assets/img/master.jpg",
      "offer": false,
      "quantity": 0,
    },
    {
      "name": "Red Point",
      "price": 880,
      "stock": 75,
      "image": "assets/img/redpoint.jpg",
      "offer": true,
      "quantity": 0,
    },
    {
      "name": "Red Point Box",
      "price": 920,
      "stock": 0,
      "image": "assets/img/red point box.jpg",
      "offer": false,
      "quantity": 0,
    },
    {
      "name": "Liverpool",
      "price": 750,
      "stock": 25,
      "image": "assets/img/liverpool.jpg",
      "offer": false,
      "quantity": 0,
    },
    {
      "name": "Liverpool Mentolado",
      "price": 750,
      "stock": 0,
      "image": "assets/img/liverpool mentolado.jpg",
      "offer":false,
      "quantity": 0,
    },
    {
      "name": "Camel",
      "price": 1500,
      "stock": 200,
      "image": "assets/img/camel.jpg",
      "offer": true,
      "quantity": 0,
    },
    {
      "name": "Marlboro",
      "price": 1500,
      "stock": 5,
      "image": "assets/img/Marlboro.jpg",
      "offer": false,
      "quantity": 0,
    },
    {
      "name": "Philips",
      "price": 1400,
      "stock": 0,
      "image": "assets/img/philips.jpg",
      "offer": false,
      "quantity": 0,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  

  
  
}
