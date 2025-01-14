import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Hero } from '../../shared/interfaces/hero.interface';
import { heroNameValidator } from '../../shared/validators/hero_name.validator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {
  add = output<Hero>()
  readonly #formBuilder = inject(FormBuilder);
  message = "";

  heroForm: FormGroup = this.#formBuilder.group({
    name:['choose a Hero name', Validators.required, heroNameValidator],
    image:['https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/370-joker.jpg'],
    alignment: ['Good'],
    powerstats: this.#formBuilder.group({
      agility: [75, [Validators.required, Validators.min(0), Validators.max(100)]],
      intelligence: [75, [Validators.required, Validators.min(0), Validators.max(100)]],
      speed: [75, [Validators.required, Validators.min(0), Validators.max(100)]],
      stamina: [75, [Validators.required, Validators.min(0), Validators.max(100)]],
      strength: [75, [Validators.required, Validators.min(0), Validators.max(100)]],
    }),
    abilities: [],
  });

  powerstats = ['agility', 'intelligence', 'speed', 'stamina', 'strength'];

  addHero(){
    if (this.heroForm.invalid){
      this.message = "Please correct all errors and try again."
    } else {
      const hero: Hero = {
        id: Math.floor(Math.random()*1000)+1,
        ...this.heroForm.value,
        powerstats: {...this.heroForm.value.powerstats},
      };
      this.message = `Hero ${this.heroForm.value.name} has been added successfully!`;
      this.add.emit(hero);
    }

  }

}
