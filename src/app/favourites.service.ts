import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Music, music } from './music';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  favourites = new BehaviorSubject<Music[]>([]);

  constructor() {}
}
