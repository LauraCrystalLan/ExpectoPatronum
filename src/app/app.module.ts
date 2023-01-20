import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TafSnackBarComponent } from './components/taf-snack-bar/taf-snack-bar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PlatformModule } from '@angular/cdk/platform';
import { MobileMainPageComponent } from './pages/mobile-main-page/mobile-main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, TafSnackBarComponent, MainPageComponent, MobileMainPageComponent],
  imports: [BrowserModule, AppRoutingModule, PlatformModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
