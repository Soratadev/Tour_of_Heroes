import { Component, inject } from '@angular/core';
import { HeroFormComponent } from "../../../components/hero-form/hero-form.component";
import { Hero } from '../../../shared/interfaces/hero.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-update',
  standalone: true,
  imports: [HeroFormComponent],
  //templateUrl: './hero-update.component.html',
  template:`
  <div class="bg-cyan-500">
  <h2 class="bg-cyan-500 text-2xl text-center">Update Hero</h2>
  <app-hero-form (sendHero)="updateHero($event)" />
  </div>`,
})
export class HeroUpdateComponent {
  readonly #router = inject(Router);
  updateHero(_hero: any) {
    const hero: Hero = {
      ..._hero,
      id: Math.floor(Math.random() * 1000) + 1,
    }
    this.#router.navigate(['/home']);
  }

}
