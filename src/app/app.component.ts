import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isMobile!: boolean;
  constructor(public platform: Platform) {}
  ngOnInit(): void {
    this.isMobile = this.platform.ANDROID || this.platform.IOS;
  }
}
