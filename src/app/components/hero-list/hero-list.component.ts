import { Component } from '@angular/core';
import { HeroCardComponent } from "../hero-card/hero-card.component";
import { Hero } from '../../shared/interfaces/hero.interface';
import { HeroPowerstatsChange } from '../../shared/interfaces/hero-powerstats-change.interface';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [HeroCardComponent],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent {
  public heroes: Hero[] = [
    {
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
        ' Wall-crawling', 
        ' Superhuman strength'
      ],
      image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/620-spider-man.jpg',
      alignment: 'Good',
    },
    {
      id: 225,
      name: 'Dr.Octopus',
      powerstats: {
        strength: 70,
        agility: 90,
        stamina: 70,
        speed: 90,
        intelligence: 100,
      },
      abilities: [
        'robotic tentacles',
        ' super intelligence',
        ' resilience'
      ],
      image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/225-doctor-octopus.jpg',
      alignment: 'Bad'
    },
    {
      id: 70,
      name: 'Batman',
      powerstats: {
        strength: 90,
        agility: 90,
        stamina: 80,
        speed: 90,
        intelligence: 80,
      },
      abilities: [
        'filthy rich',
        ' technology',
        ' martial arts'
      ],
      image:'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg',
      alignment: 'Good'
    }

  ];
  savePowerstats({hero, powerstat, value}: HeroPowerstatsChange): void {
    hero.powerstats[powerstat]+= value;
  }


}
