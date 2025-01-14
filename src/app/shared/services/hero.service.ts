import { Injectable } from '@angular/core';
import { Hero, Powerstat } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

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

  add(hero: Hero){
    this.heroes.push(hero);
  }
  update(hero: Hero, powerstat: Powerstat, value: number){
    hero.powerstats[powerstat] += value;
  }
  findAll(): Hero[] {
    return this.heroes;
  }
  delete(hero: Hero){
    this.heroes = this.heroes.filter(h => h.id !== hero.id);
  }


  
}
