import { Component, inject } from '@angular/core';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroFormComponent } from "./components/hero-form/hero-form.component";
import { Hero } from './shared/interfaces/hero.interface';
import { HeroService } from './shared/services/hero.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroListComponent, HeroFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
  readonly #heroService = inject(HeroService);

  heroes = this.#heroService.findAll();

  addHero(hero: Hero): void{
    this.#heroService.add(hero);
  }
}
