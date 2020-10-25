import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CigaretteCartService } from '../cigarette-cart.service';
import { Cigarette } from '../cigarette-list/cigarette';

@Component({
  selector: 'app-cigarette-cart',
  templateUrl: './cigarette-cart.component.html',
  styleUrls: ['./cigarette-cart.component.css']
})
export class CigaretteCartComponent implements OnInit {

  list$: Observable<Cigarette[]>;
  constructor(private cart: CigaretteCartService) { 
    this.list$ = cart.list.asObservable();
  }

  ngOnInit(): void {
  }

}
