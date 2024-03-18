import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { Launchpad } from '../../models/launchpad.model';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [MatDialogModule, MatButtonModule, CommonModule, DialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set correct status class for "active" status', () => {
    const statusClass = component.getStatusClass('active');
    expect(statusClass).toEqual({ 'bg-success': true, 'bg-danger': false, 'bg-warning': false });
  });

  it('should set correct status class for "inactive" status', () => {
    const statusClass = component.getStatusClass('inactive');
    expect(statusClass).toEqual({ 'bg-success': false, 'bg-danger': true, 'bg-warning': false });
  });

  it('should set correct status class for "unknown" status', () => {
    const statusClass = component.getStatusClass('unknown');
    expect(statusClass).toEqual({ 'bg-success': false, 'bg-danger': false, 'bg-warning': true });
  });

  it('should set correct status class for "retired" status', () => {
    const statusClass = component.getStatusClass('retired');
    expect(statusClass).toEqual({ 'bg-success': false, 'bg-danger': false, 'bg-warning': true });
  });

  it('should set correct status class for "lost" status', () => {
    const statusClass = component.getStatusClass('lost');
    expect(statusClass).toEqual({ 'bg-success': false, 'bg-danger': true, 'bg-warning': false });
  });

  it('should set correct status class for "under construction" status', () => {
    const statusClass = component.getStatusClass('under construction');
    expect(statusClass).toEqual({ 'bg-success': false, 'bg-danger': false, 'bg-warning': true });
  });

});