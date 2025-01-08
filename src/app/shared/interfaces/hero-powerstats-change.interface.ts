import { Hero, Powerstat } from "./hero.interface";

export interface HeroPowerstatsChange {
    hero: Hero;
    powerstat: Powerstat;
    value: number;
    
}