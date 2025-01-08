import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Hero } from '../../shared/interfaces/hero.interface';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {
  readonly #formBuilder = inject(FormBuilder);
  message = "";
  heroForm = this.#formBuilder.group({
    name:['', Validators.required]


  });

  addHero(){
    if (this.heroForm.invalid){
      this.message = "Please correct all errors and try again."
    } else {
      const hero: Hero = {
        id: Math.floor(Math.random()*1000)+1,
        ...this.heroForm.value,

      } as Hero;
      this.message = `Hero ${this.heroForm.value.name} has been added successfully!`;
    }

  }

}
