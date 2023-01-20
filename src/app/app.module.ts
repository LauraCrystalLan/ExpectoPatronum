import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TafSnackBarComponent } from './components/taf-snack-bar/taf-snack-bar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TafSnackBarComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
