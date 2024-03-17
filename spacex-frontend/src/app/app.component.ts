import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TopNavbarComponent } from './shared/navbars/top-navbar/top-navbar.component';
import { BottomNavbarComponent } from './shared/navbars/bottom-navbar/bottom-navbar.component';
import { LogoComponent } from './shared/components/logo/logo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, TopNavbarComponent, BottomNavbarComponent, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spacex-frontend';
}
