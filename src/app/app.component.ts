import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavberComponent } from './navber/navber.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavberComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-learn-AtoZ';
  navberData:string = "Root to Navber passed data...";
}
