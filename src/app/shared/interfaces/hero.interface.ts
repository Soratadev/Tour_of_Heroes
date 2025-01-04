export interface Hero {
    id: number;
    name: string;
    powerstats: Powerstats;
    abilities: string[];
    image: string;
    alignment: 'Good' | 'Bad';
}

export interface Powerstats {
    strength: number;
    agility: number;
    stamina: number;
    speed: number;
    intelligence: number;
}

export type Powerstat = keyof Powerstats;