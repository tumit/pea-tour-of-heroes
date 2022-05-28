import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // void => Hero[]
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // void => Observable<Hero[]>
  getHeroes(): Observable<Hero[]> {
    // return of(HEROES).pipe(delay(500));
    return throwError(() => ({ status: 404, message: 'Not found' }));
  }
}
