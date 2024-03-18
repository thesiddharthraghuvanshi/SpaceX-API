import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FiltersBarComponent } from './filters-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FiltersBarComponent', () => {
  let component: FiltersBarComponent;
  let fixture: ComponentFixture<FiltersBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        FiltersBarComponent,
        ReactiveFormsModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltersBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filters on applyFilters()', () => {
    const formData = {
      name: 'TestName',
      region: 'TestRegion',
      pageNumber: 1,
      records: 10
    };

    spyOn(component.filtersClickEvent, 'emit');
    component.filterForm.setValue(formData);
    component.applyFilters();

    expect(component.filtersClickEvent.emit).toHaveBeenCalledWith(formData);
  });
});
