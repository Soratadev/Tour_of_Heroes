import { Component } from '@angular/core';
import { Hero, Powerstat } from '../../shared/interfaces/hero.interface';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css'
})
export class HeroCardComponent {
  hero: Hero = {
    id: 620,
    name: 'Spiderman',
    powerstats: {
      strength: 80,
      agility: 90,
      stamina: 80,
      speed: 90,
      intelligence: 80,
    },
    abilities: [
      'Web-slinging', 
      'Wall-crawling', 
      'Superhuman strength'
    ],
    image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/620-spider-man.jpg',
    alignment: 'Good',
  }

  isHeroVillain = this.hero.alignment === 'Bad';

  decrementPowerstats(powerstat: Powerstat): void 
  {
    const value = this.hero.powerstats[powerstat];
    if (value > 0) {
      this.hero.powerstats[powerstat] = value - 10;
    }
  }

  incrementPowerstats(powerstat: Powerstat): void 
  {
    const value = this.hero.powerstats[powerstat];
    if (value < 100) {
      this.hero.powerstats[powerstat] = value + 10;
    }
  }
}
