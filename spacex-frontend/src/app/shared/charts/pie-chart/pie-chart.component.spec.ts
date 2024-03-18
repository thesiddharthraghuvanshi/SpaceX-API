import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
import { BaseChartDirective } from 'ng2-charts';
import { PieChartComponent } from './pie-chart.component';

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, PieChartComponent],
      providers: [BaseChartDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isBrowser correctly', () => {
    expect(component.isBrowser).toEqual(true);
  });

  it('should set pieChartData.labels and pieChartData.datasets on ngOnChanges', () => {
    const datasetLabels = ['Label 1', 'Label 2'];
    const data = [10, 20];
    const chartLabel = 'Chart Label';
    const expectedData = {
      labels: datasetLabels,
      datasets: [
        {
          data,
          label: chartLabel,
          backgroundColor: ['rgb(255, 165, 0)', 'rgb(60, 179, 113)'],
        },
      ],
    };

    component.datasetLabels = datasetLabels;
    component.data = data;
    component.chartLabel = chartLabel;
    component.ngOnChanges();

    expect(component.pieChartData).toEqual(expectedData);
  });

  it('should set isBrowser to true on ngOnInit', () => {
    component.ngOnInit();
    expect(component.isBrowser).toEqual(true);
  });

});
