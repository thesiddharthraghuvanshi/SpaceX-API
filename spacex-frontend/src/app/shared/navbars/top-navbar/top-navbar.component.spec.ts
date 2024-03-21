import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopNavbarComponent } from './top-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TopNavbarComponent', () => {
  let component: TopNavbarComponent;
  let fixture: ComponentFixture<TopNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        BrowserAnimationsModule,
        TopNavbarComponent,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatTooltipModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should match media query for mobile view', () => {
    expect(component.mobileQuery.matches).toBe(false); // Adjust the condition as per your media query
  });

  it('should contain the correct title in the toolbar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('.spacx-app-name');
    expect(titleElement?.textContent).toContain('SpaceX-API');
  });

  it('should toggle sidenav when menu button is clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const menuButton = compiled.querySelector('button');
    const clickEvent = new MouseEvent('click');
    menuButton?.dispatchEvent(clickEvent);
    fixture.detectChanges();
    const sidenav = compiled.querySelector('.spacex-sidenav-container');
    expect(sidenav?.getAttribute('class')).toContain('mat-sidenav-container');
  });

  it('should have correct routerLink attribute for dashboard link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const routerLinkElement = compiled.querySelector('mat-nav-list[routerLink="/dashboard"]');
    expect(routerLinkElement).toBeTruthy();
  });
});
