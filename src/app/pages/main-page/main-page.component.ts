import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TafSnackBarComponent } from 'src/app/components/taf-snack-bar/taf-snack-bar.component';
import { TafSnackBarService } from 'src/app/components/taf-snack-bar/taf-snack-bar.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  openTafSnackbar() {
    this._snackBar.openFromComponent(TafSnackBarComponent, {
      panelClass: 'test',
    });
  }
}
