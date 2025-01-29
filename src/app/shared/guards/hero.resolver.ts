import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { Hero } from "../interfaces/hero.interface";
import { inject } from "@angular/core";
import { HeroService } from "../services/hero.service";

export const heroResolver: ResolveFn<Hero> = (route: ActivatedRouteSnapshot) => {
    const heroService = inject(HeroService);
    return heroService.findOne(parseInt(route.paramMap.get('id')!, 10));
    //puedo dejarlo en una sola línea de la siguiente manera:
    //=> inject(HeroService).findOne(parseInt(route.paramMap.get('id')!, 10));
}