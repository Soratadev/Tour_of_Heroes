import { Component } from '@angular/core';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroFormComponent } from "./components/hero-form/hero-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroListComponent, HeroFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
