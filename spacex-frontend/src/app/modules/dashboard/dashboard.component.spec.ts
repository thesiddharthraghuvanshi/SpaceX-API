import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { Filters } from '../../shared/models/filters.model';
import { LaunchpadService } from '../../shared/services/launchpad.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [DashboardComponent, BrowserAnimationsModule, HttpClientModule],
      providers: [LaunchpadService]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize correctly', () => {
    expect(component.datasetLabels).toEqual(['Total Launches', 'Success Launches']);
    expect(component.data).toEqual([100, 25]);
    expect(component.chartLabel).toEqual('Ratio');
    expect(component.filters).toBeUndefined();
    expect(component.displayPieChart).toBeTrue();
  });

  it('should load pie chart', () => {
    component.loadPieChart();
    expect(component.displayPieChart).toBeTrue();
  });

  it('should load bar chart', () => {
    component.loadBarChart();
    expect(component.displayPieChart).toBeFalse();
  });

  it('should handle filters click event', () => {
    const filters: Filters = { name: 'Test', region: 'Test Region', pageNumber: '1', records: '10' };
    component.onFiltersClickEvent(filters);
    expect(component.filters).toEqual(filters);
  });

  it('should handle row click event', () => {
    const rowData = { launch_attempts: 50, launch_successes: 10 };
    component.onRowClicked(rowData);
    expect(component.data).toEqual([rowData.launch_attempts, rowData.launch_successes]);
  });
});
