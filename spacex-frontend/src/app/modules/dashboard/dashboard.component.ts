import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TableComponent } from '../../shared/components/table/table.component';
import { PieChartComponent } from '../../shared/charts/pie-chart/pie-chart.component';
import { FiltersBarComponent } from '../../shared/navbars/filters-bar/filters-bar.component';
import { Filters } from '../../shared/models/filters.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatSlideToggleModule, TableComponent, PieChartComponent, FiltersBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  datasetLabels = ['Total Launches', 'Success Launches'];
  data = [100, 25];
  chartLabel = 'Ratio';
  filters!: Filters;

  constructor() { }

  onRowClicked(row: any): void {
    this.datasetLabels = ['abc', 'cde'];
    this.data = [50, 50];
    this.chartLabel = 'Haha';
  }

  onFiltersClickEvent(filters: Filters): void {
    this.filters=filters;
  }

}
