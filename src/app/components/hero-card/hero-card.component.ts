import { Component, computed, input, output } from '@angular/core';
import { Hero, Powerstat } from '../../shared/interfaces/hero.interface';
import { CommonModule } from '@angular/common';
import { HeroPowerstatsChange } from '../../shared/interfaces/hero-powerstats-change.interface';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css'
})
export class HeroCardComponent {
  hero = input.required<Hero>();
  powerstatsChange = output<HeroPowerstatsChange>();

  isHeroVillain = computed(()=> this.hero().alignment === 'Bad');

  decrementPowerstats(powerstat: Powerstat): void {
    this.powerstatsChange.emit({hero: this.hero(), powerstat, value: -5});
  }

  incrementPowerstats(powerstat: Powerstat): void {
    this.powerstatsChange.emit({hero: this.hero(), powerstat, value: +5});
  }
}
