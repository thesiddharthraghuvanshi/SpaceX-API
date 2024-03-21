import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements OnInit, OnChanges {

  isBrowser: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  @Input() datasetLabels: string[] = [];
  @Input() data: number[] = [];
  @Input() chartLabel: string = "";

  pieChartData = {
    labels: [''],
    datasets: [
      {
        data: [0],
        label: '',
        backgroundColor: [
          '',
          '',
        ]
      }
    ]
  }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnChanges(): void {
    this.pieChartData = {
      labels: this.datasetLabels,
      datasets: [
        {
          data: this.data,
          label: this.chartLabel,
          backgroundColor: [
            'rgba(173, 216, 230, 1)',
            'rgba(144, 238, 144, 1)'
          ]
        }
      ]
    }
  }
}
