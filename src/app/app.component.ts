import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginCardComponent } from "./login-card/login-card.component";
import { NavbarComponent } from "./navbar/navbar.component";


import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { DxProgressBarComponent } from 'devextreme-angular/ui/progress-bar';
import { DataGridComponent } from "./data-grid/data-grid.component";
import { AboutComponent } from "./about/about.component";
import { CustomerFormComponent } from './customer-form/customer-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
