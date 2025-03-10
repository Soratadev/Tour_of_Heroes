import { Component, inject, input } from '@angular/core';
import { HeroCardComponent } from "../hero-card/hero-card.component";
import { Hero } from '../../shared/interfaces/hero.interface';
import { HeroPowerstatsChange } from '../../shared/interfaces/hero-powerstats-change.interface';
import { HeroService } from '../../shared/services/hero.service';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [HeroCardComponent],
  templateUrl: './hero-list.component.html',

})
export class HeroListComponent {
  heroes = input.required<Hero[]>();
  readonly #heroService = inject(HeroService);
  savePowerstats({hero, powerstat, value}: HeroPowerstatsChange): void {
    this.#heroService.updatePowerstat(hero, powerstat, value)
  }


}
