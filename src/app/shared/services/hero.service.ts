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
        ' wall-crawling', 
        ' sperhuman strength'
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
        'Robotic tentacles',
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
        'Filthy rich',
        ' technology',
        ' martial arts'
      ],
      image:'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg',
      alignment: 'Good'
    }
  ];

  readonly NullHero: Hero = {
    id: Math.floor(Math.random() * 1000) + 1000,
    name: 'Unknown',
    powerstats: {
      agility: 0,
      intelligence: 0,
      speed: 0,
      stamina: 0,
      strength: 0,
    },
    abilities: [],
    image: './assets/unknown_hero1.jpg',
    alignment: 'Bad'
  };

  readonly defaultHero: Hero = {
    id: 370,
    name: 'Joker',
    powerstats: {
      agility: 60,
      intelligence: 70,
      speed: 60,
      stamina: 70,
      strength: 50,
    },
    abilities: ['Laughing gas', ' practical jokes', ' things that make you KABOOM'],
    image: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/370-joker.jpg',
    alignment: 'Bad'
  };

  add(hero: Hero){
    this.heroes.push(hero);
  }
  update(HeroToUpdate: Hero){
    this.heroes = this.heroes.map(hero => hero.id === HeroToUpdate.id ? HeroToUpdate : hero);
  }
  updatePowerstat(hero: Hero, powerstat: Powerstat, value: number){
    hero.powerstats[powerstat] += value;
  }
  findAll(): Hero[] {
    return this.heroes;
  }
  delete(hero: Hero){
    const index = this.heroes.findIndex((hero) => hero.id === hero.id);
    if(index !== -1){
      this.heroes.splice(index, 1);
    }
  }
  findOne(id: number): Hero {
    return this.heroes.find((hero) => hero.id === id) || this.NullHero;
  }
  isDefaultHero(hero: Hero): boolean {
    return hero.id === this.defaultHero.id;
  }
  isNullHero(hero: Hero): boolean {
    return hero.id === this.NullHero.id;
  }


  
}
