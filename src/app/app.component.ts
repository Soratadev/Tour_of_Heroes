import { Component } from '@angular/core';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
  <div class="grid grid-rows-[auto_1fr_auto] min-h-screen justify-between gap-2">
    <app-header class="col-span-3"/>
    <router-outlet/>
    <app-footer class="col-span-3"/>
  </div>`
})
export class AppComponent {
  title = 'Tour of Heroes';
}
