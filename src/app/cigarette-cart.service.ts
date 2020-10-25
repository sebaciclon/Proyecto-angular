import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cigarette } from './cigarette-list/cigarette';

@Injectable({
  providedIn: 'root'
})
export class CigaretteCartService {

  private _list: Cigarette[] = [];
  list: BehaviorSubject<Cigarette[]> = new BehaviorSubject([]);

  constructor() { }
  
  addToCart(cigarette: Cigarette) {
    let item: Cigarette = this._list.find((v1) => v1.name == cigarette.name);
    if(!item) {
      this._list.push({ ... cigarette});
    } else {
        item.quantity += cigarette.quantity;
    }
    this.list.next(this._list);
  }

  
}
