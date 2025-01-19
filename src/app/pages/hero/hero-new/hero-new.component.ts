import { Component, inject } from '@angular/core';
import { HeroFormComponent } from "../../../components/hero-form/hero-form.component";
import { HeroService } from '../../../shared/services/hero.service';
import { Hero } from '../../../shared/interfaces/hero.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-new',
  standalone: true,
  imports: [HeroFormComponent],
  //templateUrl: './hero-new.component.html',
  template:`
  <div class="bg-orange-300">
  <h2 class="text-2xl text-center">Add new Hero</h2>
  <app-hero-form (sendHero)="addHero($event)"/>
  </div>`,
})
export class HeroNewComponent {

  readonly #heroService = inject(HeroService);
  readonly #router = inject(Router);
  
  addHero(_hero: Hero): void{
    const hero: Hero = {
        ..._hero,
        id: Math.floor(Math.random() * 1000) + 1,
      };
    this.#heroService.add(hero);
    this.#router.navigate(['/home']);
  }

}
