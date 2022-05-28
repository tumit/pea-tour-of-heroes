import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

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

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
    // this.heroFormGroup.setValue(this.hero);
  }

  onSelectHero(hero: Hero) {
    console.log('hero', hero)
    this.heroFormGroup.setValue(hero);
  }

}
