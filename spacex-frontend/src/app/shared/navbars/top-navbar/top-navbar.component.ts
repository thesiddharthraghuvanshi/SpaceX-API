import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LogoComponent } from '../../components/logo/logo.component';
import { DashboardComponent } from '../../../modules/dashboard/dashboard.component';
import { FiltersBarComponent } from '../filters-bar/filters-bar.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatToolbarModule,
    LogoComponent, DashboardComponent, FiltersBarComponent, MatTooltipModule],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss'
})
export class TopNavbarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
