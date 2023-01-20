import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APPROUTER } from './constant/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isMobile!: boolean;
  constructor(public platform: Platform, private router: Router) {}
  ngOnInit(): void {
    this.isMobile = this.platform.ANDROID || this.platform.IOS;
    if (this.isMobile) {
      this.router.navigate([APPROUTER.MOBILE]);
    } else {
      this.router.navigate([APPROUTER.MAIN]);
    }
  }
}
