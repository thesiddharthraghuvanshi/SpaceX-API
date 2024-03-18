import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { LaunchpadService } from '../../services/launchpad.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { Launchpad } from '../../models/launchpad.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule, BrowserAnimationsModule, MatDialogModule, MatPaginatorModule, MatSortModule, TableComponent],
      providers: [LaunchpadService]
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit row click event', () => {
    spyOn(component.rowClickEvent, 'emit');
    const rowData = { name: 'Test', region: 'Test Region', status: 'active', launches: [] };
    component.onRowClick(rowData);
    expect(component.rowClickEvent.emit).toHaveBeenCalledWith(rowData);
  });

  it('should open dialog on dialog button click', () => {
    spyOn(component.dialog, 'open').and.stub();
    const rowData = new Launchpad('1', '', '', 'active', '', '', '', 0, 0, 0, 0, [], []);
    component.openDialog(rowData);
    expect(component.dialog.open).toHaveBeenCalledWith(jasmine.any(Function), { data: rowData });
  });

  it('should redirect to Google Maps on map icon click', () => {
    const spy = spyOn(window, 'open').and.stub();
    const rowData = { latitude: 10.123, longitude: 20.456 };
    component.redirectToGoogleMaps(rowData.latitude, rowData.longitude);
    expect(spy).toHaveBeenCalledWith(`https://www.google.com/maps?q=${rowData.latitude},${rowData.longitude}`, '_blank');
  });

});
