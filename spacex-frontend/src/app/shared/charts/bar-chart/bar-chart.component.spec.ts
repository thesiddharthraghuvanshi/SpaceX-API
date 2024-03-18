import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
import { BaseChartDirective } from 'ng2-charts';
import { BarChartComponent } from './bar-chart.component';

describe('BarChartComponent', () => {
  let component: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule, BarChartComponent],
      providers: [BaseChartDirective]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isBrowser correctly', () => {
    expect(component.isBrowser).toEqual(true);
  });

  it('should set barChartData.labels and barChartData.datasets on ngOnChanges', () => {
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

    expect(component.barChartData).toEqual(expectedData);
  });

  it('should set isBrowser to true on ngOnInit', () => {
    component.ngOnInit();
    expect(component.isBrowser).toEqual(true);
  });
});
