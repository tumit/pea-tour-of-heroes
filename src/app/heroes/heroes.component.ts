import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroFormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  })

  heroes: Hero[] = [];

  message = '';

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    // this.heroes = this.heroService.getHeroes();

    // subscribe (next: fn)
    // subscribe ({next: fn, error: fn, complete: fn})

    this.heroService.getHeroes()
      .subscribe({
        next: hs => this.heroes = hs,
        error: err => this.message = err.message
      });
  }

  onSelectHero(hero: Hero) {
    console.log('hero', hero)
    this.heroFormGroup.setValue(hero);
  }

}
