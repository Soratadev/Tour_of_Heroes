import { Component, inject } from '@angular/core';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroFormComponent } from "./components/hero-form/hero-form.component";
import { Hero } from './shared/interfaces/hero.interface';
import { HeroService } from './shared/services/hero.service';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroListComponent, HeroFormComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'Tour of Heroes';
  readonly #heroService = inject(HeroService);

  heroes = this.#heroService.findAll();

  addHero(hero: Hero): void{
    this.#heroService.add(hero);
  }
}
