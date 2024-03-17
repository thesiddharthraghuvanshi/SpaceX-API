import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TableComponent } from '../../shared/components/table/table.component';
import { PieChartComponent } from '../../shared/charts/pie-chart/pie-chart.component';
import { FiltersBarComponent } from '../../shared/navbars/filters-bar/filters-bar.component';
import { Filters } from '../../shared/models/filters.model';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BarChartComponent } from '../../shared/charts/bar-chart/bar-chart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, TableComponent, PieChartComponent, BarChartComponent,
    FiltersBarComponent, MatButtonModule, MatMenuModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  datasetLabels = ['Total Launches', 'Success Launches'];
  data = [100, 25];
  chartLabel = 'Ratio';
  filters!: Filters;
  displayPieChart = true;

  constructor() { }

  onRowClicked(row: any): void {
    this.data = [row.launch_attempts, row.launch_successes];
  }

  onFiltersClickEvent(filters: Filters): void {
    this.filters = filters;
  }

  loadPieChart(): void {
    this.displayPieChart = true;
  }

  loadBarChart(): void {
    this.displayPieChart = false;
  }

}
