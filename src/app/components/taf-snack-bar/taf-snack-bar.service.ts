import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TafSnackBarComponent } from './taf-snack-bar.component';

@Injectable({
  providedIn: 'root',
})
export class TafSnackBarService {
  constructor(private _snackBar: MatSnackBar) {}

  open() {

  }
}
