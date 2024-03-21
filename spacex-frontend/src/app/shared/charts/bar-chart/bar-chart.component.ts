import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit, OnChanges {
  isBrowser: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  @Input() datasetLabels: string[] = [];
  @Input() data: number[] = [];
  @Input() chartLabel: string = "";

  barChartData = {
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
    this.barChartData = {
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
