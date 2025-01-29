import { Component, computed, inject, input, output, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Hero } from '../../shared/interfaces/hero.interface';
import { heroNameValidator } from '../../shared/validators/hero_name.validator';
import { CommonModule, LowerCasePipe } from '@angular/common';
import { HeroService } from '../../shared/services/hero.service';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {
  readonly #heroService = inject(HeroService);
  add = output<Hero>({alias: 'sendHero'});
  hero = input<Hero>(this.#heroService.defaultHero);
  readonly #formBuilder = inject(FormBuilder);
  message = "";
  textButton = computed(() => this.#heroService.isDefaultHero(this.hero()) ? 'Create' : 'Update');

  heroForm: Signal<FormGroup> = computed(() => this.#formBuilder.group({
    name:[this.hero().name, Validators.required, heroNameValidator],
    image:[this.hero().image, Validators.required],
    alignment: [this.hero().alignment, Validators.required],
    powerstats: this.#formBuilder.group({
      agility: [this.hero().powerstats.agility, [Validators.required, Validators.min(0), Validators.max(100)]],
      intelligence: [this.hero().powerstats.intelligence, [Validators.required, Validators.min(0), Validators.max(100)]],
      speed: [this.hero().powerstats.speed, [Validators.required, Validators.min(0), Validators.max(100)]],
      stamina: [this.hero().powerstats.stamina, [Validators.required, Validators.min(0), Validators.max(100)]],
      strength: [this.hero().powerstats.strength, [Validators.required, Validators.min(0), Validators.max(100)]],
    }),
    abilities: [this.hero().abilities],
  }));

  powerstats = ['agility', 'intelligence', 'speed', 'stamina', 'strength'];

  addHero(){
    if (this.heroForm().invalid){
      this.message = "Please correct all errors and try again."
    } else {
      const hero: Hero = {
        id: this.hero().id,
        ...this.heroForm().value,
        powerstats: {...this.heroForm().value.powerstats},
      };
      this.message = `Hero ${this.heroForm().value.name} has been added successfully!`;
      this.add.emit(hero);
    }

  }

}
