import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginCardComponent } from "./login-card/login-card.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginCardComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
