import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: `dear's เดดไลน์ โอ้โฮเฮะ ++`,
    power: 100
  };

  hero2: Hero;

  heroFormControl
    = new FormControl(
      '',
      Validators.required);

  heroFormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    power: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
    // this.heroFormControl.setValue(this.hero);
    this.heroFormGroup.setValue(this.hero);
    this.hero2 = {} as Hero;
  }

}
