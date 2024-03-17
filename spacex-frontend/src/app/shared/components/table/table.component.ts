import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LaunchpadService } from '../../services/launchpad.service';
import { Launchpad } from '../../models/launchpad.model';
import { CommonModule } from '@angular/common';
import { Filters } from '../../models/filters.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,
    MatDialogModule, DialogComponent, MatTooltipModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent implements OnChanges, AfterViewInit {
  displayedColumns: string[] = ['name', 'region', 'status', 'launches'];
  dataSource!: MatTableDataSource<Launchpad>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  @Output() rowClickEvent = new EventEmitter<any>();
  @Input() filters!: Filters;

  constructor(private launchpadService: LaunchpadService,
    public dialog: MatDialog) {
    this.launchpadService.fetchAllLaunchpads(0, 5).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);

    });
  }

  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filters'] && changes['filters'].currentValue) {
      const filterChange: SimpleChange = changes['filters'];
      this.launchpadService.fetchFilteredLaunchpads(filterChange.currentValue).subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onRowClick(row: any): void {
    this.rowClickEvent.emit(row);
  }

  getStatusClass(status: string): any {
    return {
      'text-success': status === 'active',
      'text-danger': status === 'inactive' || status === 'lost',
      'text-warning': status === 'unknown' || status === 'retired' || status === 'under construction',
    };
  }

  openDialog(row: Launchpad): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  redirectToGoogleMaps(latitude: number, longitude: number): void {
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(googleMapsUrl, '_blank');
  }

}

