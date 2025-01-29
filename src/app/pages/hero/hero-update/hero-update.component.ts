import { Component, inject } from '@angular/core';
import { HeroFormComponent } from "../../../components/hero-form/hero-form.component";
import { Hero } from '../../../shared/interfaces/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../../../shared/services/hero.service';

@Component({
  selector: 'app-hero-update',
  standalone: true,
  imports: [HeroFormComponent],
  //templateUrl: './hero-update.component.html',
  template:`
  <div class="bg-cyan-500">
  <h2 class="bg-cyan-500 text-2xl text-center">Update Hero</h2>
  <app-hero-form [hero]="hero" (sendHero)="updateHero($event)" />
  </div>`,
})
export class HeroUpdateComponent {
  readonly #heroService = inject(HeroService);
  readonly #router = inject(Router);
  readonly #activatedRoute = inject(ActivatedRoute);
  hero: Hero = this.#activatedRoute.snapshot.data['hero'];
  updateHero(hero: any) {
    this.#heroService.update(hero);
    this.#router.navigate(['/home']);
  }

}
