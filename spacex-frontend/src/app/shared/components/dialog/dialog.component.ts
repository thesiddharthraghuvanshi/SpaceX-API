import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Launchpad } from '../../models/launchpad.model';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Launchpad) { }
  launchURL = environment.spaceX_launchURL;
  rocketURL = environment.spaceX_rocketURL;

  getStatusClass(status: string): any {
    return {
      'bg-success': status === 'active',
      'bg-danger': status === 'inactive' || status === 'lost',
      'bg-warning': status === 'unknown' || status === 'retired' || status === 'under construction',
    };
  }
}
